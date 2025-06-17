<?php

namespace App\Controller;

use App\Entity\Article;
use App\Entity\Comment;
use App\Form\ArticleType;
use App\Form\CommentType;
use App\Repository\ArticleRepository;
use App\Repository\CommentRepository;
use DateTime;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class BlogController extends AbstractController
{
    #[Route('/blog', name: 'blog')]
    public function index(
        ArticleRepository $repo,
        Request $request,
        PaginatorInterface $paginator
    ): Response {
        // Récupère les articles triés par date descendante
        $query = $repo->createQueryBuilder('a')
                      ->orderBy('a.createdAt', 'DESC')
                      ->getQuery();

        // Paginer les résultats (5 par page)
        $articles = $paginator->paginate(
            $query,
            $request->query->getInt('page', 1),
            5
        );

        return $this->render('blog/index.html.twig', [
            'articles' => $articles,
        ]);
    }

    #[Route('/', name: 'home')]
    public function home(): Response
    {
        return $this->render('home/index.html.twig');
    }

    #[Route('/blog/new', name: 'blog_create')]
    #[Route('/blog/{id}/edit', name: 'blog_edit')]
    public function createOrEditArticle(
        ?Article $article,
        Request $request,
        EntityManagerInterface $manager
    ): Response {
        // Crée un article si c’est une création
        if (!$article) {
            $article = new Article();
        }

        $form = $this->createForm(ArticleType::class, $article);
        $form->handleRequest($request);

        // Enregistre l'article si le formulaire est valide
        if ($form->isSubmitted() && $form->isValid()) {
            if (!$article->getId()) {
                $article->setCreatedAt(new DateTimeImmutable())
                        ->setAuthor($this->getUser());
            }

            $manager->persist($article);
            $manager->flush();

            return $this->redirectToRoute('blog_show', ['id' => $article->getId()]);
        }

        return $this->render('blog/create.html.twig', [
            'formArticle' => $form->createView(),
            'editMode' => $article->getId() !== null,
        ]);
    }

    #[Route('/blog/{id}', name: 'blog_show', methods: ['GET', 'POST'])]
    public function showArticle(
        Article $article,
        Request $request,
        EntityManagerInterface $manager,
        Security $security
    ): Response {
        $comment = new Comment();
        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);

        // Ajoute un commentaire s'il est soumis et valide
        if ($form->isSubmitted() && $form->isValid()) {
            $comment->setCreatedAt(new DateTime())
                    ->setArticle($article)
                    ->setAuthor($security->getUser());

            $manager->persist($comment);
            $manager->flush();

            $this->addFlash('success', 'Commentaire ajouté avec succès.');
            return $this->redirectToRoute('blog_show', ['id' => $article->getId()]);
        }

        return $this->render('blog/show.html.twig', [
            'article' => $article,
            'formArticle' => $form->createView(),
            'formComment' => $form->createView(),
            'editMode' => $article->getId() !== null,
        ]);
    }

    #[Route('/like/{type}/{id}', name: 'like', methods: ['POST'])]
    public function likeContent(
        string $type,
        int $id,
        ArticleRepository $articleRepo,
        CommentRepository $commentRepo,
        EntityManagerInterface $em
    ): JsonResponse {
        // Détermine le type d’entité à liker
        $entity = match ($type) {
            'article' => $articleRepo->find($id),
            'comment' => $commentRepo->find($id),
            default => null
        };

        if (!$entity) {
            return new JsonResponse(['error' => 'Type ou élément non trouvé'], 404);
        }

        // Incrémente les likes et enregistre
        $entity->incrementLikes();
        $em->flush();

        return new JsonResponse(['likesCount' => $entity->getLikes()]);
    }

    #[Route('/blog/{id}/delete', name: 'blog_delete', methods: ['POST'])]
    public function deleteArticle(
        Request $request,
        Article $article,
        EntityManagerInterface $manager
    ): RedirectResponse {
        // Vérifie le token CSRF avant suppression
        $token = $request->request->get('_token');

        if ($this->isCsrfTokenValid('delete-article' . $article->getId(), $token)) {
            $manager->remove($article);
            $manager->flush();

            $this->addFlash('success', 'Article supprimé avec succès.');
        } else {
            $this->addFlash('error', 'Token CSRF invalide, suppression annulée.');
        }

        return $this->redirectToRoute('blog');
    }

    #[Route('/{id}/delete', name: 'app_comment_delete', methods: ['POST'])]
    public function deleteComment(
        Request $request,
        Comment $comment,
        EntityManagerInterface $entityManager
    ): Response {
        // Vérifie le token CSRF avant suppression
        $token = $request->getPayload()->getString('_token');

        if ($this->isCsrfTokenValid('delete' . $comment->getId(), $token)) {
            $entityManager->remove($comment);
            $entityManager->flush();

            $this->addFlash('success', 'Commentaire supprimé avec succès.');
        } else {
            $this->addFlash('error', 'Token CSRF invalide, suppression annulée.');
        }

        return $this->redirectToRoute('blog_show', [
            'id' => $comment->getArticle()->getId(),
        ], Response::HTTP_SEE_OTHER);
    }
}
