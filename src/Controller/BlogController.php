<?php

namespace App\Controller;

use App\Entity\Article;
use App\Entity\Comment;
use App\Entity\Category;
use App\Form\ArticleType;
use App\Form\CommentType;
use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route; // plus classique que Attribute Route
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Knp\Component\Pager\PaginatorInterface;


final class BlogController extends AbstractController
{
    #[Route('/blog', name: 'blog')]
    public function index(ArticleRepository $repo, Request $request,   PaginatorInterface $paginator): Response
    { // Récupère une requête Doctrine (pas directement les articles)
    $query = $repo->createQueryBuilder('a')
        ->orderBy('a.createdAt', 'DESC')
        ->getQuery();

    // Applique la pagination
    $articles = $paginator->paginate(
        $query,                             // Requête à paginer
        $request->query->getInt('page', 1), // Numéro de page courant, 1 par défaut
        5                                   // Limite par page
    );
        return $this->render('blog/index.html.twig', [
            'controller_name' => 'BlogController',
            'articles' => $articles,
        ]);
    }

    #[Route('/', name: 'home')]
    public function home(): Response
    {
        return $this->render('blog/home.html.twig');
    }

    #[Route('/blog/new', name: 'blog_create')]
    #[Route('/blog/{id}/edit', name: 'blog_edit')]
    public function create(?Article $article = null, Request $request, EntityManagerInterface $manager): Response
    {
        if (!$article) {
            $article = new Article();
        }

        $form = $this->createForm(ArticleType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if (!$article->getId()) {
                $article->setCreatedAt(new \DateTime());
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

    #[Route('/blog/{id}', name: 'blog_show', methods: ['GET'])]
    public function show(Article $article, 
     Request $request,
    EntityManagerInterface $manager): Response
   
    {
        $comment = new Comment();
        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);
        
         if ($form->isSubmitted() && $form->isValid()) {
                $comment->setCreatedAt(new \DateTime());
                $comment->setArticle($article); // lie le commentaire à l'article
                
            $manager->persist($comment);
            $manager->flush();

            $this->addFlash('success', 'Commentaire ajouté avec succès.');
            return $this->redirectToRoute('blog_show', ['id' => $article->getId()]);
        }


        return $this->render('blog/show.html.twig', [
            'article' => $article,
             'comment' =>$comment,
            'formArticle' => $form->createView(),
            'formComment' => $form->createView(),
            'editMode' => $article->getId() !== null,

        ]);
    }

    // Nouvelle route pour la suppression d'article (méthode POST recommandée)
    #[Route('/blog/{id}/delete', name: 'blog_delete', methods: ['POST'])]
    public function delete(Request $request, Article $article, EntityManagerInterface $manager): RedirectResponse
    {
        // Vérifie que le token CSRF est valide (prévention des attaques)
        if ($this->isCsrfTokenValid('delete-article'.$article->getId(), $request->request->get('_token'))) {
            $manager->remove($article);
            $manager->flush();
            $this->addFlash('success', 'Article supprimé avec succès.');
        } else {
            $this->addFlash('error', 'Token CSRF invalide, suppression annulée.');
        }

        return $this->redirectToRoute('blog');
    }


     #[Route('/{id}/delete', name: 'app_comment_delete', methods: ['POST'])]
    public function deleteComment(Request $request, Comment $comment, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$comment->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($comment);
            $entityManager->flush();
            $this->addFlash('success', 'Commentaire supprimé avec succès.');

        }
         else {
            $this->addFlash('error', 'Token CSRF invalide, suppression annulée.');
        }

        return $this->redirectToRoute('blog/show.html.twig', [], Response::HTTP_SEE_OTHER);
    }


}
