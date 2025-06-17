<?php

namespace App\Controller;

use App\Entity\Message;
use App\Entity\User;
use App\Form\MessageTypeForm;
use App\Repository\MessageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;

final class ChatController extends AbstractController
{
    #[Route('/chat', name: 'app_chat')]
    public function listUsers(EntityManagerInterface $entityManager): Response
    {
        $users = $entityManager->getRepository(User::class)->findAll();

        return $this->render('chat/home.html.twig', [
            'users' => $users,
        ]);
    }

    #[Route('/chat/{receiverId}', name: 'chat_index', requirements: ['receiverId' => '\d+'])]
    public function chatWithUser(
        int $receiverId,
        MessageRepository $messageRepository,
        EntityManagerInterface $entityManager,
        Request $request
    ): Response {
        /** @var User $currentUser */
        $currentUser = $this->getUser();

        // Redirige si l'utilisateur n'est pas connecté
        if (!$currentUser instanceof UserInterface) {
            throw $this->createAccessDeniedException('Vous devez être connecté.');
        }

        // Récupère le destinataire
        $receiver = $entityManager->getRepository(User::class)->find($receiverId);
        if (!$receiver) {
            throw $this->createNotFoundException('Utilisateur non trouvé.');
        }

        // Liste tous les utilisateurs (pour la sidebar par exemple)
        $users = $entityManager->getRepository(User::class)->findAll();

        // Récupère les messages entre les deux utilisateurs
        $messages = $messageRepository->findConversation($currentUser->getId(), $receiverId);

        // Préparation du formulaire
        $message = new Message();
        $form = $this->createForm(MessageTypeForm::class, $message);
        $form->handleRequest($request);

        // Enregistre le message si le formulaire est valide
        if ($form->isSubmitted() && $form->isValid()) {
            $message->setSender($currentUser);
            $message->setReceiver($receiver);
            $message->setCreatedAt(new \DateTimeImmutable());

            $entityManager->persist($message);
            $entityManager->flush();

            return $this->redirectToRoute('chat_index', ['receiverId' => $receiverId]);
        }

        return $this->render('chat/index.html.twig', [
            'messages' => $messages,
            'receiver' => $receiver,
            'form' => $form->createView(),
            'users' => $users,
        ]);
    }
}
