<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Article;
use App\Form\ArticleType;
use App\Repository\ArticleRepository;

final class ApiArticleController extends AbstractController
{
    #[Route('/api/articles', name: 'api_article')]
    public function index(Request $request, ArticleRepository $repo): JsonResponse
    {
       

        $articles= $repo->findAll();
       
        
        $data= [];
        foreach($articles as $article){
            $url_show = $this->generateUrl('blog_show',['id'=> $article->getId()]);
            $url_edit = $this->generateUrl('blog_edit',['id'=> $article->getId()]);
            $data[] = [
                'id' => $article->getId(),
                'title' => $article->getTitle(),
                'content' => $article->getContent(),
                'createdAt' => $article->getCreatedAt(),
                'actions' => '<div class="d-flex flex-row justify-content-end align-items-center gap-2">'
                        . '<a href="' .$url_show . '" class="btn btn-primary">Voir</a>'
                        . '<a href="' .$url_edit . '" class="btn btn-success"><i class="fa-solid fa-pen-to-square"></i>
</a>'
                    . '</div>'
            ];
        }

        return $this->json([
            
            'data' => $data,
        ]);
    }


    #[Route('/articles', name: 'articles_list')]
 public function list(ArticleRepository $repo): Response
 {
    $articles = $repo->findAll();
    return $this->render('blog/articles_datatable.html.twig', [
        'articles' => $articles
    ]);
}


		#[Route('/article/{id}', name: 'article_delete', methods: ['POST'])]
		public function delete(Request $request, Article $article, EntityManagerInterface $entityManager): Response
		{
			if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->request->get('_token'))) {
				$entityManager->remove($article);
				$entityManager->flush();
				$this->addFlash('success', 'L\'article a été supprimé avec succès.');
			}

			return $this->redirectToRoute('app_article_index', [], Response::HTTP_SEE_OTHER);
		}

}
