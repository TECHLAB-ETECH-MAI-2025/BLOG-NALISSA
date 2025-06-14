<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Form\UserTypeForm;
use App\Entity\User;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;


final class SecurityController extends AbstractController
{
    #[Route('/inscription', name: 'security_registration')]
    public function registration(Request $request, EntityManagerInterface $manager, UserPasswordHasherInterface $encoder): Response
    {    

       $user = new User();

       $form = $this->createForm(UserTypeForm::class, $user);
       $form->handleRequest($request);

       if($form->isSubmitted() && $form->isValid()){
        $hash = $encoder->hashPassword($user, $user->getPassword());
        
        $user->setPassword($hash);
        
        $manager->persist($user);
        $manager->flush();

        return $this->redirectToRoute('security_login');
       }





        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),

        ]);
    }
     
    #[Route('/connexion', name: 'security_login')]

    public function login(AuthenticationUtils $authenticationUtils){
             $error = $authenticationUtils->getLastAuthenticationError();
         
     return $this->render('security/login.html.twig', [
        'error' => $error,
     ]);

        
    }


 
}
