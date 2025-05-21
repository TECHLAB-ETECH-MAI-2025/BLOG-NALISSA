<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Article;
use App\Entity\Category;
use App\Entity\Comment;
use Faker\Factory;

class ArticlesFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // Initialise Faker en français
        $faker = Factory::create('FR_fr');

        // Crée 3 catégories fictives
        for($j = 1; $j <= 3; $j++) {

            $category = new Category();
            $category->setTitle($faker->sentence())
                     ->setDescription($faker->paragraph());

            // Enregistre la catégorie
            $manager->persist($category);     

            // Crée entre 4 et 6 articles par catégorie
            for($i = 1; $i <= mt_rand(4, 6); $i++) {

                $article = new Article();

                // Construit un contenu HTML simulé
                $content = '<p>' . implode('</p><p>', $faker->paragraphs(5)) . '</p>';

                $article->setTitle($faker->sentence())
                        ->setContent($content)
                        ->setImage('https://picsum.photos/350/150')
                        ->setCreatedAt($faker->dateTimeBetween('-6 months'))
                        ->setCategory($category);

                // Enregistre l'article
                $manager->persist($article);

                // Crée entre 4 et 10 commentaires par article
                for($k = 1; $k <= mt_rand(4, 10); $k++) {

                    $comment = new Comment(); 

                    // Contenu simulé pour le commentaire
                    $content = '<p>' . implode('</p><p>', $faker->paragraphs(5)) . '</p>';

                    // Calcule la date minimale autorisée pour le commentaire
                    $now = new \DateTime();
                    $interval = $now->diff($article->getCreatedAt());
                    $days = $interval->days;
                    $minimum = '-' . $days . ' days';

                    $comment->setAuthor($faker->name)
                            ->setContent($content)
                            ->setCreatedAt($faker->dateTimeBetween($minimum))
                            ->setArticle($article);

                    // Enregistre le commentaire
                    $manager->persist($comment);
                }
            }
        }

        // Exécute toutes les insertions en base
        $manager->flush();
    }
}
