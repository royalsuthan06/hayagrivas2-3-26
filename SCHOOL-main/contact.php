<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'];
    $message = $_POST['message'];

    if (strlen($message) < 5) {
        echo "Message too short";
        exit;
    }

    echo "Thank you for contacting Hayagrivas";
}
?>