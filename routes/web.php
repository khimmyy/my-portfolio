<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/webdevelopment', function () {
    return view('webdevelopment');
})->name('projects.webdevelopment');

