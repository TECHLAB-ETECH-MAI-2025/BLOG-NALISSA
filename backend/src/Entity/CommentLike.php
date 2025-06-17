<?php

namespace App\Entity;

use App\Repository\CommentLikeRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CommentLikeRepository::class)]
class CommentLike
{
    // Identifiant unique du like
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    // Commentaire associé (relation ManyToOne)
    #[ORM\ManyToOne(targetEntity: Comment::class, inversedBy: 'likes')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Comment $comment = null;

    // Utilisateur qui a liké (ManyToOne)
    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    // Retourne l'id du like
    public function getId(): ?int
    {
        return $this->id;
    }

    // Retourne le commentaire lié
    public function getComment(): ?Comment
    {
        return $this->comment;
    }

    // Définit le commentaire lié
    public function setComment(?Comment $comment): self
    {
        $this->comment = $comment;
        return $this;
    }

    // Retourne l'utilisateur qui a liké
    public function getUser(): ?User
    {
        return $this->user;
    }

    // Définit l'utilisateur qui a liké
    public function setUser(?User $user): self
    {
        $this->user = $user;
        return $this;
    }
}
