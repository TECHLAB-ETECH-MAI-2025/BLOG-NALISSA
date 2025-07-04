<?php

namespace App\Controller;

use App\Entity\Article;
use App\Entity\ArticleLike;
use App\Form\ArticleType;
use App\Repository\ArticleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class ApiArticleController extends AbstractController
{
    #[Route('/api/articles', name: 'api_article')]
    public function getArticles(ArticleRepository $repo): JsonResponse
    {
        $articles = $repo->findAll();
        $data = [];

        foreach ($articles as $article) {
            $data[] = [
                'id' => $article->getId(),
                'title' => $article->getTitle(),
                'content' => $article->getContent(),
                'createdAt' => $article->getCreatedAt(),
                'actions' => sprintf(
                    '<div class="d-flex flex-row justify-content-end align-items-center gap-2">
                        <a href="%s" class="btn btn-primary">Voir</a>
                        <a href="%s" class="btn btn-success">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </a>
                    </div>',
                    $this->generateUrl('blog_show', ['id' => $article->getId()]),
                    $this->generateUrl('blog_edit', ['id' => $article->getId()])
                )
            ];
        }

        return $this->json(['data' => $data]);
    }

    #[Route('/articles', name: 'articles_list')]
    public function listArticles(ArticleRepository $repo): Response
    {
        $articles = $repo->findAll();

        return $this->render('blog/articles_datatable.html.twig', [
            'articles' => $articles,
        ]);
    }

    #[Route('/article/{id}', name: 'article_delete', methods: ['POST'])]
    public function deleteArticle(
        Request $request,
        Article $article,
        EntityManagerInterface $entityManager
    ): Response {
        $token = $request->request->get('_token');

        if ($this->isCsrfTokenValid('delete' . $article->getId(), $token)) {
            $entityManager->remove($article);
            $entityManager->flush();

            $this->addFlash('success', 'Article supprimé avec succès.');
        }

        return $this->redirectToRoute('app_article_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/article/{id}/like', name: 'article_like', methods: ['POST'])]
    public function toggleLike(
        Article $article,
        EntityManagerInterface $em,
        Security $security
    ): JsonResponse {
        $user = $security->getUser();

        if (!$user) {
            return new JsonResponse(['message' => 'Non autorisé'], 401);
        }

        // Vérifie si l'utilisateur a déjà liké l'article
        foreach ($article->getLikes() as $like) {
            if ($like->getUser() === $user) {
                $article->removeLike($like);
                $em->remove($like);
                $em->flush();

                return new JsonResponse(['likes' => $article->getLikesCount()]);
            }
        }

        // Ajoute un nouveau like
        $like = new ArticleLike();
        $like->setArticle($article);
        $like->setUser($user);

        $em->persist($like);
        $em->flush();

        return new JsonResponse(['likes' => $article->getLikesCount()]);
    }
}
