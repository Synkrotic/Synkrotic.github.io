<?php

$host = "localhost";
$user = "root";
$pass = "Lucas2007";
$dBName = "pages";

$conn = new mysqli($host, $user, $pass, $dBName);

if ($conn->connect_error)
    die("Connection not found!<br>" . $conn->connect_error);
else
    echo "<script>alert('Connected!');</script>";

$conn->close();

?>