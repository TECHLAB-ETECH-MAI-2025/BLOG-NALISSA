<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationTypeForm;
use App\Repository\UserRepository;
use App\Security\EmailVerifier;
use App\Security\LoginFormAuthenticator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mime\Address;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;

final class RegistrationController extends AbstractController
{
    public function __construct(private EmailVerifier $emailVerifier)
    {
    }

    #[Route('/register', name: 'app_register')]
    public function register(
        Request $request,
        UserPasswordHasherInterface $passwordHasher,
        Security $security,
        EntityManagerInterface $em
    ): Response {
        $user = new User();

        // Crée et gère le formulaire d'inscription
        $form = $this->createForm(RegistrationTypeForm::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Définit le nom d'utilisateur à partir de l'email
            $user->setUsername($form->get('email')->getData());

            // Encode le mot de passe
            $plainPassword = $form->get('plainPassword')->getData();
            $hashedPassword = $passwordHasher->hashPassword($user, $plainPassword);
            $user->setPassword($hashedPassword);

            $em->persist($user);
            $em->flush();

            // Envoie un email de confirmation
            $email = (new TemplatedEmail())
                ->from(new Address('noreply@blog-nalissa.test', 'L\'équipe de Blog Nalissa'))
                ->to($user->getEmail())
                ->subject('Veuillez confirmer votre adresse email')
                ->htmlTemplate('registration/confirmation_email.html.twig')
                ->context([
                    'expireAtMessageKey' => 'dans %count% heure',
                    'expireAtMessageData' => ['%count%' => 1],
                ]);

            $this->emailVerifier->sendEmailConfirmation('app_verify_email', $user, $email);

            // Connecte automatiquement l'utilisateur
            return $security->login($user, LoginFormAuthenticator::class, 'main');
        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form,
        ]);
    }

    #[Route('/verify/email', name: 'app_verify_email')]
    public function verifyUserEmail(
        Request $request,
        TranslatorInterface $translator,
        UserRepository $userRepository
    ): Response {
        $id = $request->query->get('id');
        if (!$id) {
            return $this->redirectToRoute('app_register');
        }

        $user = $userRepository->find($id);
        if (!$user) {
            return $this->redirectToRoute('app_register');
        }

        // Valide le lien de confirmation
        try {
            $this->emailVerifier->handleEmailConfirmation($request, $user);
        } catch (VerifyEmailExceptionInterface $exception) {
            $this->addFlash(
                'verify_email_error',
                $translator->trans($exception->getReason(), [], 'VerifyEmailBundle')
            );

            return $this->redirectToRoute('app_register');
        }

        $this->addFlash('success', 'Votre adresse email a été vérifiée avec succès.');

        return $this->redirectToRoute('app_register');
    }
}
