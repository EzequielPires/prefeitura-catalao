<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/transparencia')]
class BidsController extends AbstractController
{
    #[Route('/', name: 'app_transparence_list')]
    public function index(): Response
    {
        return $this->render('dashboard/index.html.twig', [
            'controller_name' => 'DashboardController',
            'route_name' => 'home'
        ]);
    }

    #[Route('/licitacoes', name: 'app_transparence_licitacoes')]
    public function licitation(): Response
    {
        return $this->render('licitation/index.html.twig', [
            'controller_name' => 'BidsController',
            'route_name' => 'licitacoes'
        ]);
    }
    #[Route('/licitacoes/{id}', name: 'app_transparence_licitation_view')]
    public function licitationView($id): Response
    {
        return $this->render('licitation_view/index.html.twig', [
            'controller_name' => 'BidsController',
            'licitation' => $id
        ]);
    }
    #[Route('/contratos', name: 'app_transparence_contracts')]
        public function contracts(): Response
        {
            return $this->render('contracts/index.html.twig', [
                'controller_name' => 'BidsController',
                'route_name' => 'contratos'
            ]);
        }
}
