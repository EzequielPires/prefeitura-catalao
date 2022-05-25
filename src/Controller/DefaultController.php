<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Routing\RouterInterface;

class DefaultController extends AbstractController
{
    private Breadcrumbs $breadcrumbs;

    public function __construct(Breadcrumbs $breadcrumbs, RouterInterface $router )
    {
        $this->breadcrumbs = $breadcrumbs;
        $this->router = $router;
    }

    /**
     * @return Breadcrumbs
     */
    public function getBreadcrumbs(): Breadcrumbs
    {
        return $this->breadcrumbs;
    }
    public function initBreadcrumbs():void
    {
        $this->getBreadcrumbs()->addItem("Home", $this->router->generate('app_home'));
    }

}