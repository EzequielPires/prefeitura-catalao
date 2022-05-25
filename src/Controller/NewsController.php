<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Routing\RouterInterface;

#[Route('/noticias')]
class NewsController extends DefaultController
{
    public function __construct(Breadcrumbs $breadcrumbs, RouterInterface $router) {
        parent::__construct($breadcrumbs, $router);
        $this->initBreadcrumbs();
    }

    #[Route('/', name: 'app_noticias_list')]
    public function news_listing(): Response
    {
        $this->getBreadcrumbs()->addItem("Noticias", $this->router->generate('app_noticias_list'));
        return $this->render('news_list/index.html.twig', [
            'controller_name' => 'NewsController',
        ]);
    }
    #[Route('/{category}', name: 'app_noticias_category_list')]
    public function news_listing_by_category(string $category): Response
    {
        $this->getBreadcrumbs()->addItem("Noticias", $this->router->generate('app_noticias_list'));
        $this->getBreadcrumbs()->addItem($category, $this->router->generate('app_noticias_category_list', ['category' => $category]));

        return $this->render('news_list/index.html.twig', [
            'controller_name' => 'NewsController',
            'category_name' => $category
        ]);
    }
    #[Route('/{category}/{id}', name: 'app_noticias_view')]
        public function news_viewing($id, $category): Response
        {
            $this->getBreadcrumbs()->addItem("Noticias", $this->router->generate('app_noticias_list'));
            $this->getBreadcrumbs()->addItem($category, $this->router->generate('app_noticias_category_list', ['category' => $category]));
            $this->getBreadcrumbs()->addItem($id);

            return $this->render('new_view/index.html.twig', [
                'controller_name' => 'NewsController',
                'licitation' => $id,
            ]);
        }
}
