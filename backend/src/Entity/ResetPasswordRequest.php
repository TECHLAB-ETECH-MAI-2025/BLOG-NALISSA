<?php

namespace App\Entity;

use App\Repository\ResetPasswordRequestRepository;
use Doctrine\ORM\Mapping as ORM;
use SymfonyCasts\Bundle\ResetPassword\Model\ResetPasswordRequestInterface;
use SymfonyCasts\Bundle\ResetPassword\Model\ResetPasswordRequestTrait;

#[ORM\Entity(repositoryClass: ResetPasswordRequestRepository::class)]
class ResetPasswordRequest implements ResetPasswordRequestInterface
{
    use ResetPasswordRequestTrait;

    // Identifiant unique de la requête
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // Utilisateur lié à la requête de réinitialisation
    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    /**
     * Initialise une nouvelle requête de réinitialisation de mot de passe.
     *
     * @param User $user Utilisateur concerné
     * @param \DateTimeInterface $expiresAt Date d'expiration de la requête
     * @param string $selector Identifiant unique de la requête
     * @param string $hashedToken Jeton sécurisé haché
     */
    public function __construct(User $user, \DateTimeInterface $expiresAt, string $selector, string $hashedToken)
    {
        $this->user = $user;
        $this->initialize($expiresAt, $selector, $hashedToken);
    }

    // Récupère l'id de la requête
    public function getId(): ?int
    {
        return $this->id;
    }

    // Récupère l'utilisateur associé
    public function getUser(): User
    {
        return $this->user;
    }
}
