<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/noticias')]
class NewsController extends AbstractController
{
    #[Route('/', name: 'app_noticias_list')]
    public function index(): Response
    {
        return $this->render('news/index.html.twig', [
            'controller_name' => 'NewsController',
        ]);
    }
    #[Route('/{id}', name: 'app_noticias_view')]
        public function view($id): Response
        {
            return $this->render('new_view/index.html.twig', [
                'controller_name' => 'NewsController',
                'licitation' => $id
            ]);
        }
}
