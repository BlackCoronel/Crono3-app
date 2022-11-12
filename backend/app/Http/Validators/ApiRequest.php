<?php

namespace App\Http\Validators;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Arr;
use Symfony\Component\HttpFoundation\Response;

class ApiRequest extends FormRequest
{

    /**
     * Get the proper failed validation response for the request.
     *
     * @param array $errors
     *
     * @return Response
     */
    public function response(array $errors): Response
    {
        $messages = implode(' ', Arr::flatten($errors));

        return response()->json(ResponseUtil::makeError($messages), 400);
    }
}

