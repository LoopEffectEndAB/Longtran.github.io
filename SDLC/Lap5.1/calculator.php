<?php
if (isset($_GET['calculate'])) {
    $operation = $_GET['operation'];
    $operation = $_GET['number_one'];
    $operation = $_GET['number_two'];
    $output = "";
    if ($operation == "sum") {
        $output = $number_one + $number_two;
    } else if ($operation == "subtract") {
        $output = $number_one - $number_two;
    } else {
        $output = "Invalid operation supplied";
    }
}
include 'calculator_frontend.php';
