<?php

namespace App\Entity;

use App\Repository\MessageRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MessageRepository::class)]
class Message
{
    // Identifiant unique du message
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // Utilisateur qui envoie le message
    #[ORM\ManyToOne(inversedBy: 'senderMessages')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $sender = null;

    // Utilisateur qui reçoit le message
    #[ORM\ManyToOne(inversedBy: 'receivedMessages')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $receiver = null;

    // Contenu textuel du message
    #[ORM\Column(type: Types::TEXT)]
    private ?string $content = null;

    // Date et heure de création du message
    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    // Récupère l'id du message
    public function getId(): ?int
    {
        return $this->id;
    }

    // Récupère l'expéditeur
    public function getSender(): ?User
    {
        return $this->sender;
    }

    // Définit l'expéditeur
    public function setSender(?User $sender): static
    {
        $this->sender = $sender;
        return $this;
    }

    // Récupère le destinataire
    public function getReceiver(): ?User
    {
        return $this->receiver;
    }

    // Définit le destinataire
    public function setReceiver(?User $receiver): static
    {
        $this->receiver = $receiver;
        return $this;
    }

    // Récupère le contenu du message
    public function getContent(): ?string
    {
        return $this->content;
    }

    // Définit le contenu du message
    public function setContent(string $content): static
    {
        $this->content = $content;
        return $this;
    }

    // Récupère la date de création
    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    // Définit la date de création
    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;
        return $this;
    }
}
