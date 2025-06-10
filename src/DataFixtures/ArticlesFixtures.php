<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Article;
use App\Entity\Category;
use App\Entity\Comment;
use Faker\Factory;
use Faker\Provider\fr_FR\Address;

class ArticlesFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');
        $faker->addProvider(new Address($faker));

        // 3 catégories
        for ($j = 1; $j <= 3; $j++) {
            $category = new Category();
            $category->setTitle($faker->sentence())
                     ->setDescription('<p>' . $faker->paragraph() . '</p>'); // un seul paragraphe
            $manager->persist($category);

            // 4 à 6 articles
            for ($i = 1; $i <= mt_rand(4, 6); $i++) {
                $article = new Article();
                $article->setTitle($faker->sentence())
                        ->setContent('<p>' . $faker->paragraph() . '</p>') // un seul paragraphe
                        ->setImage('https://picsum.photos/350/150')
                        ->setCreatedAt(\DateTimeImmutable::createFromMutable($faker->dateTimeBetween('-6 months')))
                        ->setCategory($category);
                $manager->persist($article);

              
                // 4 à 10 commentaires
                for ($k = 1; $k <= mt_rand(4, 10); $k++) {
                    $comment = new Comment();
                    $now = new \DateTime();
                    $interval = $now->diff($article->getCreatedAt());
                    $minimum = '-' . $interval->days . ' days';

                    $comment->setAuthor($faker->name)
                            ->setContent('<p>' . $faker->paragraph() . '</p>') // un seul paragraphe
                            ->setCreatedAt($faker->dateTimeBetween($minimum))
                            ->setArticle($article);
                    $manager->persist($comment);
                }
            }
        }

        $manager->flush();
    }
}
