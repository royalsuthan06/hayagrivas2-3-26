<?php
// LOGIN API (Future Auth)
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    if ($user === "admin" && $pass === "admin123") {
        echo "Login Successful";
    } else {
        echo "Invalid Credentials";
    }
}
?>