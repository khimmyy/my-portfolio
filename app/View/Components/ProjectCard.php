<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class ProjectCard extends Component
{
    public $title;
    public $description;
    public $tech;   
    public $link;

public function __construct($title, $description, $tech, $link)
{
    $this->title = $title;
    $this->description = $description;
    $this->tech = $tech;
    $this->link = $link;
}


    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.project-card');
    }
}
