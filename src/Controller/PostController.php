<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PostController extends AbstractController
{
    private $client;

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    #[Route('/posts', name: 'app_posts')]
    public function index(): Response
    {
        // Requête GET sur l’API externe
        $response = $this->client->request(
            'GET',
            'https://jsonplaceholder.typicode.com/posts'
        );

        // Récupérer le contenu JSON et le décoder en tableau PHP
        $posts = $response->toArray();

        // Renvoyer à la vue Twig
        return $this->render('post/index.html.twig', [
            'posts' => $posts,
        ]);
    }
}
