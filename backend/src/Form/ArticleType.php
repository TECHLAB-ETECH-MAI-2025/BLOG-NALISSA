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
     * Définit les champs du formulaire Article
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title') // Champ titre de l'article
            ->add('category', EntityType::class, [ // Sélection d'une catégorie existante
                'class' => Category::class,
                'choice_label' => 'title' // Affiche le titre de la catégorie dans la liste
            ])
            ->add('content') // Contenu de l'article
            ->add('image') // Image associée à l'article
        ;
    }

    /**
     * Configure la classe liée aux données du formulaire
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Article::class, // Formulaire lié à l'entité Article
        ]);
    }
}
