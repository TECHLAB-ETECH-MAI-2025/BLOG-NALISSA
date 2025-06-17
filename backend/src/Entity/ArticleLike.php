<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity()]
class ArticleLike
{
    // Identifiant unique du like
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // Article associé à ce like
    #[ORM\ManyToOne(targetEntity: Article::class, inversedBy: 'likes')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Article $article = null;

    // Utilisateur ayant liké l'article
    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    // Retourne l'id du like
    public function getId(): ?int
    {
        return $this->id;
    }

    // Retourne l'article lié
    public function getArticle(): ?Article
    {
        return $this->article;
    }

    // Définit l'article lié
    public function setArticle(?Article $article): static
    {
        $this->article = $article;
        return $this;
    }

    // Retourne l'utilisateur qui a liké
    public function getUser(): ?User
    {
        return $this->user;
    }

    // Définit l'utilisateur qui like
    public function setUser(?User $user): static
    {
        $this->user = $user;
        return $this;
    }
}
