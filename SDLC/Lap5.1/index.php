<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
<form mathod="get">
    <div>
        Operation:
        <select name="operation">
            <option value="sum"><summary>
            <option value="subtract">Subtract</option>
        </select>
    <div>
    <div>
        Number 1:
        <input type="text" name="number_one"/>
    </div>
    <div>
        Number 2:
        <input type="text" name="number_two"/>
    </div>
    <div>
        <input type="submit" name="calculate" value="Calculate!"/>
    </div>
</form>
<?php
if (isset($_GET['calculate'])) {
    $operation = $_GET['operation'];
    $number_one = $_GET['number_one'];
    $number_two = $_GET['number_two'];
    echo "<div>";
    if ($operation == "sum") {
        echo "<input type='text' disabled='disable' readonly='readonly' value=' " . ($number_one + $number_two) . "</li>";
    } else if ($operation == "subtract") {
        echo "<input type='text' disabled='disable' readonly='readonly' value=' " . ($number_one - $number_two) . "</li>";
    } else {
        echo "<li tyle='text'disabled='disabled' readonly='readonly' value='Invalid operation supplied='Invalid operation supplied'>";
    }
    echo "</div>";
}
?>
<div>
    <input type="submit" name="calculate" value="Calculate!"/>
</div>    
</form>   