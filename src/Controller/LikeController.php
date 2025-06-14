<?php

    namespace App\Controller;



    use App\Entity\Article;
    use App\Entity\Comment;
    use Symfony\Bundle\SecurityBundle\Security;

    use App\Entity\ArticleLike;
    use App\Entity\CommentLike;
    use Doctrine\ORM\EntityManagerInterface;
    use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
    use Symfony\Component\HttpFoundation\JsonResponse;
    use Symfony\Component\HttpFoundation\Request;
    use Symfony\Component\Routing\Annotation\Route;

    class LikeController extends AbstractController
    {
        #[Route('/like/{type}/{id}', name: 'app_like', methods: ['POST'])]
        public function like(
            string $type,
            int $id,
            EntityManagerInterface $em,
            Security $security
        ): JsonResponse {
            $user = $security->getUser();

            if (!$user) {
                return new JsonResponse(['message' => 'Unauthorized'], 401);
            }

            if ($type === 'article') {
                $repository = $em->getRepository(Article::class);
                $entity = $repository->find($id);

                if (!$entity) {
                    return new JsonResponse(['message' => 'Article non trouvé'], 404);
                }

                // Vérifie si le like existe déjà
                foreach ($entity->getLikes() as $like) {
                    if ($like->getUser() === $user) {
                        $entity->removeLike($like);
                        $em->remove($like);
                        $em->flush();
                        return new JsonResponse(['likesCount' => count($entity->getLikes())]);
                    }
                }

                $like = new ArticleLike();
                $like->setArticle($entity);
                $like->setUser($user);
                $em->persist($like);
                $em->flush();

                return new JsonResponse(['likesCount' => count($entity->getLikes())]);

            } elseif ($type === 'comment') {
                $repository = $em->getRepository(Comment::class);
                $entity = $repository->find($id);

                if (!$entity) {
                    return new JsonResponse(['message' => 'Commentaire non trouvé'], 404);
                }

                foreach ($entity->getLikes() as $like) {
                    if ($like->getUser() === $user) {
                        $entity->removeLike($like);
                        $em->remove($like);
                        $em->flush();
                        return new JsonResponse(['likesCount' => count($entity->getLikes())]);
                    }
                }

                $like = new CommentLike();
                $like->setComment($entity);
                $like->setUser($user);
                $em->persist($like);
                $em->flush();

                return new JsonResponse(['likesCount' => count($entity->getLikes())]);

            } else {
                return new JsonResponse(['message' => 'Type inconnu'], 400);
            }
        }
    }
