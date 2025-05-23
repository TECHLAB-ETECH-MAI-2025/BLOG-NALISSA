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

#[Route('/comment')]
final class CommentController extends AbstractController
{
    #[Route(name: 'app_comment_index', methods: ['GET'])]
    public function index(CommentRepository $commentRepository): Response
    {
        // Affiche la liste de tous les commentaires
        return $this->render('comment/index.html.twig', [
            'comments' => $commentRepository->findAll(),
        ]);
    }

    #[Route('/{id}', name: 'app_comment_show', methods: ['GET', 'POST'])]
    public function show(Comment $comment): Response
    {
        // Affiche le détail d'un commentaire
        return $this->render('comment/show.html.twig', [
            'comment' => $comment,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_comment_edit')]
    public function create(?Comment $comment = null, Request $request, EntityManagerInterface $manager): Response
    {
        // Crée un nouveau commentaire s'il n'existe pas
        if (!$comment) {
            $comment = new Comment();
        }

        // Crée et gère le formulaire
        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);

        // Enregistre le commentaire si le formulaire est valide
        if ($form->isSubmitted() && $form->isValid()) {
            if (!$comment->getId()) {
                $comment->setCreatedAt(new \DateTime());
            }
            $manager->persist($comment);
            $manager->flush();

            // Redirige vers l’article lié au commentaire
            return $this->redirectToRoute('blog_show', ['id' => $comment->getArticle()->getId()]);
        }

        // Affiche le formulaire avec les données existantes
        return $this->render('blog/show.html.twig', [
            'formComment' => $form->createView(),
            'editMode' => $comment->getId() !== null,
            'article' => $comment->getArticle(),
        ]);
    }

    #[Route('/comment/{id}/delete', name: 'app_comment_delete', methods: ['POST'])]
    public function delete(Request $request, Comment $comment, EntityManagerInterface $entityManager): Response
    {
        $article = $comment->getArticle();

        // Vérifie le token CSRF avant suppression
        if ($this->isCsrfTokenValid('delete'.$comment->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($comment);
            $entityManager->flush();
            $this->addFlash('success', 'Commentaire supprimé avec succès.');
        } else {
            $this->addFlash('error', 'Token CSRF invalide, suppression annulée.');
        }

        // Redirige vers l'article d'origine
        return $this->redirectToRoute('blog_show', ['id' => $article->getId()]);
    }
}
