<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Form\ProfileFormType;
use App\Form\ChangePasswordForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;



final class ProfileController extends AbstractController
{
    #[Route('/profile', name: 'app_profile')]
    public function index(): Response
    {
        return $this->render('profile/index.html.twig', [
            'controller_name' => 'ProfileController',
        ]);
    }


    #[Route('/edit', name: 'app_profile_edit')]
			public function edit(Request $request, EntityManagerInterface $entityManager): Response
			{
				// Vérifier si l'utilisateur est connecté
				$this->denyAccessUnlessGranted('ROLE_USER');

				$user = $this->getUser();
				$form = $this->createForm(ProfileFormType::class, $user);
				$form->handleRequest($request);

				if ($form->isSubmitted() && $form->isValid()) {
					$entityManager->flush();

					$this->addFlash('success', 'Votre profil a été mis à jour avec succès.');

					return $this->redirectToRoute('app_profile');
				}

				return $this->render('profile/edit.html.twig', [
					'profileForm' => $form->createView(),
				]);
			}




            
			#[Route('/change-password', name: 'app_profile_change_password')]
			public function changePassword(Request $request, UserPasswordHasherInterface $passwordHasher,
	             EntityManagerInterface $entityManager): Response
			{
				// Vérifier si l'utilisateur est connecté
				$this->denyAccessUnlessGranted('ROLE_USER');
                /** @var \App\Entity\User $user */
				$user = $this->getUser();
                 if (!$user instanceof \Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface) {
                  throw $this->createAccessDeniedException('Utilisateur non authentifié ou invalide.');
                }
				$form = $this->createForm(ChangePasswordForm::class);
				$form->handleRequest($request);

				if ($form->isSubmitted() && $form->isValid()) {
					// Vérifier l'ancien mot de passe
					if (!$passwordHasher->isPasswordValid($user, $form->get('currentPassword')->getData())) {
						$this->addFlash('error', 'Le mot de passe actuel est incorrect.');

						return $this->redirectToRoute('app_profile_change_password');
					}

					// Encoder le nouveau mot de passe
					$user->setPassword(
						$passwordHasher->hashPassword(
							$user,
							$form->get('plainPassword')->getData()
						)
					);

					$entityManager->flush();

					$this->addFlash('success', 'Votre mot de passe a été modifié avec succès.');

					return $this->redirectToRoute('app_profile');
				}

				return $this->render('profile/change_password.html.twig', [
					'form' => $form->createView(),
				]);
			}
		

}


