<?php

namespace App\Security;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authenticator\AbstractAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\CsrfTokenBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Credentials\PasswordCredentials;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Core\Security;


class LoginFormAuthenticator extends AbstractAuthenticator
{
   private $router;

    public function __construct(RouterInterface $router)
    {
        $this->router = $router;
    }
    public function supports(Request $request): ?bool
    {
        // Cette méthode retourne true si on est sur la route de login avec la méthode POST
        return $request->isMethod('POST') && $request->attributes->get('_route') === 'app_login';
    }

public function authenticate(Request $request): Passport
{
    $email = $request->request->get('email', '');

    return new Passport(
        new UserBadge($email), // Symfony utilise le user provider configuré automatiquement
        new PasswordCredentials($request->request->get('password', '')),
        [
            new CsrfTokenBadge('authenticate', $request->request->get('_csrf_token')),
        ]
    );
}


    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        // Redirige vers la page d'accueil ou une autre route après connexion réussie
        return new RedirectResponse($this->router->generate('security_login'));
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): ?Response
    {
        // Redirige vers la page de login avec un message d'erreur (tu peux utiliser FlashBag par ex.)
        $request->getSession()->set('security.authentication.error', $exception);

        return new RedirectResponse($this->router->generate('app_login'));
    }
}
