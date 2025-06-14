<?php

namespace App\Entity;

use App\Repository\CommentRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\Common\Collections\ArrayCollection;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;



#[ORM\Entity(repositoryClass: CommentRepository::class)]
class Comment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $author = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $content = null;

    #[ORM\Column]
    private ?\DateTime $createdAt = null;

    #[ORM\ManyToOne(inversedBy: 'comments')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Article $article = null;

    #[ORM\OneToMany(mappedBy: 'comment', targetEntity: CommentLike::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    private Collection $likes;


      public function __construct()
    {
        $this->likes = new ArrayCollection();
    }
    public function getId(): ?int
    {
        return $this->id;
    }
    public function getLikes(): Collection
    {
        return $this->likes;
    }

   
    public function addLike(CommentLike $like): self
    {
        if (!$this->likes->contains($like)) {
            $this->likes[] = $like;
            $like->setComment($this);
        }
        return $this;
    }

    public function removeLike(CommentLike $like): self
    {
       
        if ($this->likes->removeElement($like)) {
            if ($like->getComment() === $this) {
                $like->setComment(null);
            }
        }
        return $this;
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

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): static
    {
        $this->content = $content;

        return $this;
    }

    public function getCreatedAt(): ?\DateTime
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTime $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getArticle(): ?Article
    {
        return $this->article;
    }

    public function setArticle(?Article $article): static
    {
        $this->article = $article;

        return $this;
    }
}
