<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private ?string $email = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $firstName = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $lastName = null;

    /** @var list<string> User roles */
    #[ORM\Column]
    private array $roles = [];

    #[ORM\Column(type: 'datetime_immutable')]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(type: 'boolean')]
    private ?bool $isVerified = false;

    /** Hashed password */
    #[ORM\Column]
    private ?string $password = null;

    public ?string $confirm_password = null;

    #[ORM\Column(length: 255)]
    private ?string $username = null;

    /** @var Collection<int, Message> Messages envoyés */
    #[ORM\OneToMany(targetEntity: Message::class, mappedBy: 'sender')]
    private Collection $senderMessages;

    /** @var Collection<int, Article> Articles écrits */
    #[ORM\OneToMany(mappedBy: 'author', targetEntity: Article::class)]
    private Collection $articles;

    /** @var Collection<int, Message> Messages reçus */
    #[ORM\OneToMany(targetEntity: Message::class, mappedBy: 'receiver')]
    private Collection $receivedMessages;

    #[ORM\Column(type: 'integer')]
    private int $likes = 0;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->senderMessages = new ArrayCollection();
        $this->receivedMessages = new ArrayCollection();
        $this->articles = new ArrayCollection();
    }

    // Identifiant unique de l'utilisateur
    public function getId(): ?int
    {
        return $this->id;
    }

    // Email de l'utilisateur
    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;
        return $this;
    }

    // Date de création du compte
    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;
        return $this;
    }

    // Statut de vérification du compte
    public function isVerified(): ?bool
    {
        return $this->isVerified;
    }

    public function setIsVerified(bool $isVerified): static
    {
        $this->isVerified = $isVerified;
        return $this;
    }

    // Prénom
    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(?string $firstName): static
    {
        $this->firstName = $firstName;
        return $this;
    }

    // Nom de famille
    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(?string $lastName): static
    {
        $this->lastName = $lastName;
        return $this;
    }

    // Nom complet (prénom + nom)
    public function getFullName(): string
    {
        return trim($this->firstName . ' ' . $this->lastName);
    }

    // Identifiant unique pour Symfony Security (email)
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /** 
     * Rôles de l'utilisateur, toujours inclut ROLE_USER 
     * @return string[]
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        $roles[] = 'ROLE_USER';
        return array_unique($roles);
    }

    /**
     * Définit les rôles de l'utilisateur
     * @param string[] $roles
     */
    public function setRoles(array $roles): static
    {
        $this->roles = $roles;
        return $this;
    }

    // Mot de passe hashé
    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;
        return $this;
    }

    // Efface les données sensibles temporaires
    public function eraseCredentials(): void
    {
        // ex: $this->plainPassword = null;
    }

    // Nom d'utilisateur personnalisé
    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): static
    {
        $this->username = $username;
        return $this;
    }

    // Nombre total de likes reçus
    public function getLikes(): int
    {
        return $this->likes;
    }

    public function setLikes(int $likes): static
    {
        $this->likes = $likes;
        return $this;
    }

    // Incrémente le nombre de likes
    public function incrementLikes(): static
    {
        $this->likes++;
        return $this;
    }

    // Décrémente le nombre de likes sans passer en dessous de zéro
    public function decrementLikes(): void
    {
        if ($this->likes > 0) {
            $this->likes--;
        }
    }

    /** @return Collection<int, Message> Messages envoyés */
    public function getMessages(): Collection
    {
        return $this->senderMessages;
    }

    // Ajoute un message envoyé
    public function addMessage(Message $message): static
    {
        if (!$this->senderMessages->contains($message)) {
            $this->senderMessages->add($message);
            $message->setSender($this);
        }
        return $this;
    }

    // Retire un message envoyé
    public function removeMessage(Message $message): static
    {
        if ($this->senderMessages->removeElement($message)) {
            if ($message->getSender() === $this) {
                $message->setSender(null);
            }
        }
        return $this;
    }

    /** @return Collection<int, Message> Messages reçus */
    public function getReceivedMessages(): Collection
    {
        return $this->receivedMessages;
    }

    // Ajoute un message reçu
    public function addReceivedMessage(Message $receivedMessage): static
    {
        if (!$this->receivedMessages->contains($receivedMessage)) {
            $this->receivedMessages->add($receivedMessage);
            $receivedMessage->setReceiver($this);
        }
        return $this;
    }

    // Retire un message reçu
    public function removeReceivedMessage(Message $receivedMessage): static
    {
        if ($this->receivedMessages->removeElement($receivedMessage)) {
            if ($receivedMessage->getReceiver() === $this) {
                $receivedMessage->setReceiver(null);
            }
        }
        return $this;
    }
}
