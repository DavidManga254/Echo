<?php

namespace App\Helpers;

class ApiHelper
{
    public static function success($data = [], $message = "Request successful", $errorMessage = '')
    {
        return [
            "status" => "success",
            "message" => $message,
            "errorMessage" => $errorMessage,
            "data" => $data,
        ];
    }

    public static function error($message = "Request failed", $errors = [], $errorMessage = '')
    {
        return [
            "status" => "error",
            "message" => $message,
            "errorMessage" => $errorMessage,
            "data" => null,
        ];
    }
}
