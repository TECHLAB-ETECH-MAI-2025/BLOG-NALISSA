<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Article;

#[ORM\Entity(repositoryClass: CategoryRepository::class)]
class Category
{
    // Identifiant unique de la catégorie
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // Titre de la catégorie
    #[ORM\Column(length: 255)]
    private ?string $title = null;

    // Description optionnelle de la catégorie
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $description = null;

    /**
     * Collection d'articles liés à cette catégorie
     * @var Collection<int, Article>
     */
    #[ORM\OneToMany(mappedBy: 'category', targetEntity: Article::class)]
    private Collection $articles;

    // Initialise la collection d'articles
    public function __construct()
    {
        $this->articles = new ArrayCollection();
    }

    // Retourne l'id de la catégorie
    public function getId(): ?int
    {
        return $this->id;
    }

    // Retourne le titre
    public function getTitle(): ?string
    {
        return $this->title;
    }

    // Définit le titre
    public function setTitle(string $title): static
    {
        $this->title = $title;
        return $this;
    }

    // Retourne la description (ou null)
    public function getDescription(): ?string
    {
        return $this->description;
    }

    // Définit la description
    public function setDescription(?string $description): static
    {
        $this->description = $description;
        return $this;
    }

    /**
     * Retourne la collection d'articles
     * @return Collection<int, Article>
     */
    public function getArticles(): Collection
    {
        return $this->articles;
    }

    // Ajoute un article à la catégorie
    public function addArticle(Article $article): static
    {
        if (!$this->articles->contains($article)) {
            $this->articles[] = $article;
            $article->setCategory($this);
        }

        return $this;
    }

    // Supprime un article de la catégorie
    public function removeArticle(Article $article): static
    {
        if ($this->articles->removeElement($article)) {
            if ($article->getCategory() === $this) {
                $article->setCategory(null);
            }
        }

        return $this;
    }

    // Affiche le titre quand on convertit en string
    public function __toString(): string
    {
        return $this->title ?? '';
    }
}
