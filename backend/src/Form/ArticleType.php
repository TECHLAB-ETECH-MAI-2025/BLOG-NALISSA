<?php

namespace App\Form;

use App\Entity\Article;
use App\Entity\Category;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ArticleType extends AbstractType
{
    /**
     * Crée les champs du formulaire pour un article.
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // Champ pour le titre de l'article
            ->add('title')

            // Champ pour choisir une catégorie (liste des catégories existantes)
            ->add('category', EntityType::class, [
                'class' => Category::class,
                'choice_label' => 'title', // Affiche le nom de la catégorie
            ])

            // Champ pour le contenu principal
            ->add('content')

            // Champ pour l'image (URL ou chemin)
            ->add('image');
    }

    /**
     * Définit l'entité liée au formulaire.
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Article::class, // Ce formulaire manipule des objets Article
        ]);
    }
}
