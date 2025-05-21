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
        return $this->render('comment/index.html.twig', [
            'comments' => $commentRepository->findAll(),
        ]);
    }

  

    #[Route('/{id}', name: 'app_comment_show', methods: ['GET', 'POST'])]
    public function show(Comment $comment): Response
    {
        return $this->render('comment/show.html.twig', [
            'comment' => $comment,
            
        ]);
    }

    #[Route('/new/{articleId}', name: 'app_comment_new')]
    #[Route('/{id}/edit', name: 'app_comment_edit')]
    public function create(?Comment  $comment  = null, Request $request, EntityManagerInterface $manager): Response
    {
        if (!$comment) {
            $comment = new Comment();
        }

        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if (!$comment->getId()) {
                $comment->setCreatedAt(new \DateTime());
            }
            $manager->persist($comment);
            $manager->flush();

            return $this->redirectToRoute('blog_show', ['id' => $comment->getArticle()->getId()]);
        }

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

   
    if($this->isCsrfTokenValid('delete'.$comment->getId(), $request->getPayload()->getString('_token'))) {
        $entityManager->remove($comment);
        $entityManager->flush();
        $this->addFlash('success', 'Commentaire supprimé avec succès.');
    } else {
        $this->addFlash('error', 'Token CSRF invalide, suppression annulée.');
    }

    return $this->redirectToRoute('blog_show', ['id' => $article->getId()]);
}

    
}
