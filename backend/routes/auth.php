<?php

use App\Http\Controllers\Authenticacion\LoginController;
use Illuminate\Support\Facades\Route;

Route::post('/login', LoginController::class);
