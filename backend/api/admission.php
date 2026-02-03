<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $parent = $_POST['parent_name'];
    $student = $_POST['student_name'];
    $phone = $_POST['phone'];
    $grade = $_POST['grade'];

    // Validation
    if (empty($parent) || empty($student)) {
        echo "Required fields missing";
        exit;
    }

    // Ippo DB illa – future la insert pannalaam
    echo "Admission form received successfully";
}
?>