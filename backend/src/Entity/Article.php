<?php

namespace App\Entity;

use App\Repository\ArticleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use App\Entity\Category;
use App\Entity\User;
use App\Entity\Comment;
use App\Entity\ArticleLike;
use DateTimeImmutable;

#[ORM\Entity(repositoryClass: ArticleRepository::class)]
class Article
{
    // Identifiant unique de l'article
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // Titre de l'article, 10 à 255 caractères
    #[ORM\Column(length: 255)]
    #[Assert\Length(min: 10, max: 255, minMessage: "Votre titre est trop court")]
    private ?string $title = null;

    // Contenu principal de l'article, 10 à 255 caractères
    #[ORM\Column(type: 'text')]
    #[Assert\Length(min: 10, max: 255, minMessage: "Votre contenu est trop court")]
    private ?string $content = null;

    // URL de l'image associée
    #[ORM\Column(length: 255)]
    #[Assert\Url()]
    private ?string $image = null;

    // Auteur de l'article (relation ManyToOne)
    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $author = null;

    // Catégorie liée à l'article
    #[ORM\ManyToOne(inversedBy: 'articles', targetEntity: Category::class)]
    #[ORM\JoinColumn(name: "category_id", referencedColumnName: "id", nullable: false)]
    private ?Category $category = null;

    // Collection des "likes" liés à cet article
    #[ORM\OneToMany(mappedBy: 'article', targetEntity: ArticleLike::class, orphanRemoval: true)]
    private Collection $likes;

    // Collection des commentaires liés à cet article
    #[ORM\OneToMany(mappedBy: 'article', targetEntity: Comment::class, orphanRemoval: true)]
    private Collection $comments;

    // Date de création (immutable)
    #[ORM\Column(type: 'datetime_immutable')]
    private ?DateTimeImmutable $createdAt = null;

    public function __construct()
    {
        $this->comments = new ArrayCollection();
        $this->likes = new ArrayCollection();
        $this->createdAt = new DateTimeImmutable();
    }

    // Getters et setters avec fluent interface (retourne $this)

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): static
    {
        $this->author = $author;
        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;
        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): static
    {
        $this->content = $content;
        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): static
    {
        $this->image = $image;
        return $this;
    }

    public function getCreatedAt(): ?DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;
        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): static
    {
        $this->category = $category;
        return $this;
    }

    /**
     * Retourne la liste des commentaires liés
     *
     * @return Collection<int, Comment>
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    /**
     * Ajoute un commentaire s'il n'existe pas encore
     */
    public function addComment(Comment $comment): static
    {
        if (!$this->comments->contains($comment)) {
            $this->comments->add($comment);
            $comment->setArticle($this);
        }
        return $this;
    }

    /**
     * Supprime un commentaire lié
     */
    public function removeComment(Comment $comment): static
    {
        if ($this->comments->removeElement($comment)) {
            // Retire la relation inverse
            if ($comment->getArticle() === $this) {
                $comment->setArticle(null);
            }
        }
        return $this;
    }

    /**
     * Retourne la liste des likes liés
     *
     * @return Collection<int, ArticleLike>
     */
    public function getLikes(): Collection
    {
        return $this->likes;
    }

    /**
     * Compte le nombre de likes
     */
    public function getLikesCount(): int
    {
        return $this->likes->count();
    }

    /**
     * Ajoute un like s'il n'existe pas encore
     */
    public function addLike(ArticleLike $like): static
    {
        if (!$this->likes->contains($like)) {
            $this->likes->add($like);
            $like->setArticle($this);
        }
        return $this;
    }

    /**
     * Supprime un like lié
     */
    public function removeLike(ArticleLike $like): static
    {
        if ($this->likes->removeElement($like)) {
            // Retire la relation inverse
            if ($like->getArticle() === $this) {
                $like->setArticle(null);
            }
        }
        return $this;
    }
}
