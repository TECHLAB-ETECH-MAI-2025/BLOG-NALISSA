<?php

namespace App\Controller;

use App\Entity\Article;
use App\Entity\Comment;
use App\Form\CommentType;
use App\Repository\CommentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Core\User\UserInterface;

#[Route('/comment')]
final class CommentController extends AbstractController
{
    #[Route(name: 'app_comment_index', methods: ['GET'])]
    public function index(CommentRepository $commentRepository): Response
    {
        // Liste tous les commentaires
        return $this->render('comment/index.html.twig', [
            'comments' => $commentRepository->findAll(),
        ]);
    }

    #[Route('/{id}', name: 'app_comment_show', methods: ['GET'])]
    public function show(Comment $comment): Response
    {
        // Affiche un commentaire
        return $this->render('comment/show.html.twig', [
            'comment' => $comment,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_comment_edit', methods: ['GET', 'POST'])]
    public function editOrCreate(
        Request $request,
        ?Comment $comment = null,
        Article $article,
        EntityManagerInterface $entityManager
    ): Response {
        // Initialise un nouveau commentaire si besoin
        if (!$comment) {
            $comment = new Comment();
        }

        // Formulaire
        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);

        // Traitement du formulaire
        if ($form->isSubmitted() && $form->isValid()) {
            // Ajout de la date si nouveau commentaire
            if (!$comment->getId()) {
                $comment->setCreatedAt(new \DateTime());
            }

            // Définir l'auteur
            $user = $this->getUser();
            if (!$user instanceof UserInterface) {
                throw new \Exception('Utilisateur non connecté.');
            }

            $comment->setAuthor($user);
            $comment->setContent($request->request->get('content'));
            $comment->setArticle($article);

            // Enregistrement
            $entityManager->persist($comment);
            $entityManager->flush();

            $this->addFlash('success', 'Commentaire ajouté avec succès.');

            return $this->redirectToRoute('blog_show', ['id' => $article->getId()]);
        }

        // Affiche le formulaire
        return $this->render('blog/show.html.twig', [
            'formComment' => $form->createView(),
            'editMode' => $comment->getId() !== null,
            'article' => $article,
        ]);
    }

    #[Route('/{id}/delete', name: 'app_comment_delete', methods: ['POST'])]
    public function delete(
        Request $request,
        Comment $comment,
        EntityManagerInterface $entityManager
    ): Response {
        $article = $comment->getArticle();

        // Vérifie le CSRF token
        if ($this->isCsrfTokenValid('delete'.$comment->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($comment);
            $entityManager->flush();
            $this->addFlash('success', 'Commentaire supprimé avec succès.');
        } else {
            $this->addFlash('error', 'Token CSRF invalide.');
        }

        return $this->redirectToRoute('blog_show', ['id' => $article->getId()]);
    }
}
