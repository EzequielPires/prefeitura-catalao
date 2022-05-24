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
        ]);
    }

    #[Route('/licitacoes', name: 'app_transparence_licitacoes')]
    public function licitation(): Response
    {
        return $this->render('licitation/index.html.twig', [
            'controller_name' => 'BidsController',
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
}
