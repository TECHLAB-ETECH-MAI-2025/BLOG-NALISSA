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
        $faker = Factory::create('FR_fr');
        //créer 3 categories fakées
        for($j=1; $j <=3 ; $j++){
        $category = new Category();
        $category->setTitle($faker->sentence())
                 ->setDescription($faker->paragraph());

        $manager->persist($category);     
         //crée entre 4 et 6    
         for($i=1; $i <=mt_rand(4,6) ; $i++){
            $article = new Article();

            $content = '<p>'.implode('</p><p>', $faker->paragraphs(5)).'</p>';

            $article ->setTitle($faker->sentence())
                      ->setContent($content)
                      ->setImage('https://picsum.photos/350/150')
                      ->setCreatedAt($faker->dateTimeBetween('-6 months' ))
                      ->setCategory($category);


            $manager->persist(($article)) ;

         for($k=1; $k <=mt_rand(4,10) ; $k++){
            $comment = new Comment(); 

            $content = '<p>'.implode('</p><p>', $faker->paragraphs(5)).'</p>';

            $now = new \DateTime();
            $interval = $now->diff($article->getCreatedAt());
            $days = $interval->days;
            $minimum = '-'.$days.'days';

             

            $comment->setAuthor($faker->name)
                    ->setContent( $content)
                    ->setCreatedAt($faker->dateTimeBetween($minimum ))
                    ->setArticle($article);
            
            
            
            $manager->persist(($comment)) ;
        }  
        
 
         }
        }


        $manager->flush();
    }
}
