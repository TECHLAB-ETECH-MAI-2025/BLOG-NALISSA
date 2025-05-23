<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[UniqueEntity( fields:"email",  message:"l'imail que vous avez indiqué est déjà utilisé !")]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[ORM\Id]

    private ?int $id = null;


    #[ORM\Column(length: 255)]
    #[Assert\Email()]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    private ?string $username = null;

    #[ORM\Column(length: 255)]
    #[Assert\Length(min: "8", minMessage:"Votre mot de pass doit faire minimumm 8 caractères!" )]
    private ?string $password = null;

    #[Assert\EqualTo(propertyPath:"password",  message:"Rétapez la même mot de passe")]

    public $confirm_password;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): static
    {
        $this->username = $username;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }
    public function eraseCredentials(): void{

    }
    public function getSalt(){

    }
    public function getRoles(): array{
     
        return ['ROLE_USER'];
    }
       public function getUserIdentifier(): string
    {
        return $this->email ?? '';
    }

}
