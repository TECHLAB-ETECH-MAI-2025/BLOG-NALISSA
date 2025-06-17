<?php

namespace App\Controller;

use App\Entity\Article;
use App\Entity\Comment;
use App\Entity\ArticleLike;
use App\Entity\CommentLike;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

final class LikeController extends AbstractController
{
    // Gère les likes pour un article ou un commentaire
    #[Route('/like/{type}/{id}', name: 'app_like', methods: ['POST'])]
    public function like(
        string $type,
        int $id,
        EntityManagerInterface $em,
        Security $security
    ): JsonResponse {
        $user = $security->getUser();

        // Vérifie que l'utilisateur est connecté
        if (!$user) {
            return new JsonResponse(['message' => 'Non autorisé'], 401);
        }

        if (!in_array($type, ['article', 'comment'], true)) {
            return new JsonResponse(['message' => 'Type inconnu'], 400);
        }

        $entity = $type === 'article'
            ? $em->getRepository(Article::class)->find($id)
            : $em->getRepository(Comment::class)->find($id);

        if (!$entity) {
            return new JsonResponse(['message' => ucfirst($type) . ' non trouvé'], 404);
        }

        // Vérifie si l'utilisateur a déjà liké
        foreach ($entity->getLikes() as $like) {
            if ($like->getUser() === $user) {
                $entity->removeLike($like);
                $em->remove($like);
                $em->flush();

                return new JsonResponse([
                    'likesCount' => count($entity->getLikes())
                ]);
            }
        }

        // Ajoute un nouveau like
        $like = $type === 'article'
            ? (new ArticleLike())->setArticle($entity)
            : (new CommentLike())->setComment($entity);

        $like->setUser($user);
        $em->persist($like);
        $em->flush();

        return new JsonResponse([
            'likesCount' => count($entity->getLikes())
        ]);
    }
}
