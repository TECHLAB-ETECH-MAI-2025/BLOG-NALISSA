<?php 

namespace App\Controller;

use App\Entity\Article;
use App\Entity\Comment;
use App\Entity\Category;
use \DateTime;
use \DateTimeImmutable;


use App\Form\ArticleType;
use App\Form\CommentType;
use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Knp\Component\Pager\PaginatorInterface;

final class BlogController extends AbstractController
{
    // Route principale du blog avec pagination
    #[Route('/blog', name: 'blog')]
    public function index(ArticleRepository $repo, Request $request, PaginatorInterface $paginator): Response
    {
        // Prépare une requête pour récupérer les articles triés par date
        $query = $repo->createQueryBuilder('a')
                      ->orderBy('a.createdAt', 'DESC')
                      ->getQuery();

        // la pagination (5 articles par page)
        $articles = $paginator->paginate(
            $query,
            $request->query->getInt('page', 1),
            5
        );

        // Affiche la liste des articles
        return $this->render('blog/index.html.twig', [
            'controller_name' => 'BlogController',
            'articles' => $articles,
        ]);
    }

    // Route de la page d'accueil
    #[Route('/', name: 'home')]
    public function home(): Response
    {
        return $this->render('home/index.html.twig');
    }

    // Route pour créer ou modifier un article
    #[Route('/blog/new', name: 'blog_create')]
    #[Route('/blog/{id}/edit', name: 'blog_edit')]
    public function create(?Article $article = null, Request $request, EntityManagerInterface $manager): Response
    {
        // Crée un nouvel article si aucun n'est fourni
        if (!$article) {
            $article = new Article();
        }

        // Crée le formulaire lié à l'article
        $form = $this->createForm(ArticleType::class, $article);
        $form->handleRequest($request);

        // Si le formulaire est soumis et valide
        if ($form->isSubmitted() && $form->isValid()) {

            // Ajoute la date de création si c'est un nouvel article
            if (!$article->getId()) {
                $article->setCreatedAt(new DateTimeImmutable());
            }

            // Enregistre l'article
            $manager->persist($article);
            $manager->flush();

            // Redirige vers l'affichage de l'article
            return $this->redirectToRoute('blog_show', ['id' => $article->getId()]);
        }

        // Affiche le formulaire (mode création ou édition)
        return $this->render('blog/create.html.twig', [
            'formArticle' => $form->createView(),
            'editMode' => $article->getId() !== null,
        ]);
    }

    // Route pour afficher un article et ses commentaires
    #[Route('/blog/{id}', name: 'blog_show', methods: ['GET', 'POST'])]
    public function show(Article $article, Request $request, EntityManagerInterface $manager): Response
    {
        // Prépare un nouveau commentaire
        $comment = new Comment();
        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);
        
        // Si le formulaire est soumis et valide
        if ($form->isSubmitted() && $form->isValid()) {
            $comment->setCreatedAt(new DateTime())
                    ->setArticle($article);

            // Enregistre le commentaire
            $manager->persist($comment);
            $manager->flush();

            // Message de succès + redirection
            $this->addFlash('success', 'Commentaire ajouté avec succès.');
            return $this->redirectToRoute('blog_show', ['id' => $article->getId()]);
        }

        // Affiche l'article et le formulaire de commentaire
        return $this->render('blog/show.html.twig', [
            'article' => $article,
            'comment' => $comment,
            'formArticle' => $form->createView(),
            'formComment' => $form->createView(),
            'editMode' => $article->getId() !== null,
        ]);
    }

    // Route pour supprimer un article
    #[Route('/blog/{id}/delete', name: 'blog_delete', methods: ['POST'])]
    public function delete(Request $request, Article $article, EntityManagerInterface $manager): RedirectResponse
    {
        // Vérifie la validité du token CSRF
        if ($this->isCsrfTokenValid('delete-article'.$article->getId(), $request->request->get('_token'))) {
            $manager->remove($article);
            $manager->flush();

            $this->addFlash('success', 'Article supprimé avec succès.');
        } else {
            $this->addFlash('error', 'Token CSRF invalide, suppression annulée.');
        }

        return $this->redirectToRoute('blog');
    }

    // Route pour supprimer un commentaire
    #[Route('/{id}/delete', name: 'app_comment_delete', methods: ['POST'])]
    public function deleteComment(Request $request, Comment $comment, EntityManagerInterface $entityManager): Response
    {
        // Vérifie la validité du token CSRF
        if ($this->isCsrfTokenValid('delete'.$comment->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($comment);
            $entityManager->flush();

            $this->addFlash('success', 'Commentaire supprimé avec succès.');
        } else {
            $this->addFlash('error', 'Token CSRF invalide, suppression annulée.');
        }

        return $this->redirectToRoute('blog/show.html.twig', [], Response::HTTP_SEE_OTHER);
    }
}
