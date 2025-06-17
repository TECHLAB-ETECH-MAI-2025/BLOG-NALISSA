<?php

namespace App\Entity;

use App\Repository\CommentRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CommentRepository::class)]
class Comment
{
    // Identifiant unique du commentaire
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // Auteur du commentaire (relation ManyToOne avec User)
    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $author = null;

    // Contenu texte du commentaire
    #[ORM\Column(type: Types::TEXT)]
    private ?string $content = null;

    // Date de création du commentaire
    #[ORM\Column]
    private ?\DateTime $createdAt = null;

    // Article associé au commentaire (ManyToOne)
    #[ORM\ManyToOne(inversedBy: 'comments')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Article $article = null;

    /**
     * Collection des likes liés à ce commentaire
     * @var Collection<int, CommentLike>
     */
    #[ORM\OneToMany(mappedBy: 'comment', targetEntity: CommentLike::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    private Collection $likes;

    // Initialise la collection de likes
    public function __construct()
    {
        $this->likes = new ArrayCollection();
    }

    // Retourne l'id du commentaire
    public function getId(): ?int
    {
        return $this->id;
    }

    // Retourne les likes du commentaire
    public function getLikes(): Collection
    {
        return $this->likes;
    }

    // Ajoute un like au commentaire
    public function addLike(CommentLike $like): static
    {
        if (!$this->likes->contains($like)) {
            $this->likes[] = $like;
            $like->setComment($this);
        }
        return $this;
    }

    // Retire un like du commentaire
    public function removeLike(CommentLike $like): static
    {
        if ($this->likes->removeElement($like)) {
            if ($like->getComment() === $this) {
                $like->setComment(null);
            }
        }
        return $this;
    }

    // Retourne l'auteur du commentaire
    public function getAuthor(): ?User
    {
        return $this->author;
    }

    // Définit l'auteur du commentaire
    public function setAuthor(?User $author): static
    {
        $this->author = $author;
        return $this;
    }

    // Retourne le contenu du commentaire
    public function getContent(): ?string
    {
        return $this->content;
    }

    // Définit le contenu du commentaire
    public function setContent(string $content): static
    {
        $this->content = $content;
        return $this;
    }

    // Retourne la date de création
    public function getCreatedAt(): ?\DateTime
    {
        return $this->createdAt;
    }

    // Définit la date de création
    public function setCreatedAt(\DateTime $createdAt): static
    {
        $this->createdAt = $createdAt;
        return $this;
    }

    // Retourne l'article associé
    public function getArticle(): ?Article
    {
        return $this->article;
    }

    // Définit l'article associé
    public function setArticle(?Article $article): static
    {
        $this->article = $article;
        return $this;
    }
}
