<?php
if ($_POST) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $service = $_POST["service-selector"];
    $message = $_POST["message"];

    // Recipient
    $to = 'zigmabusinesssolutions@gmail.com'; 
    $subject = "$service request from $name";


    $mail = mail($to, $subject, "Name of Client: $name,\nEmail: $email,\nMobile: $mobile,\nService: $service,\nMessage: $message");

    // Check if the email was sent successfully
    if ($mail) {
        echo '<script>alert("Form Submitted Successfully! Thank You!");</script>';
    } else {
        echo '<script>alert("Error in Submitting Form. Please contact through phone or email. Thank You!");</script>';
    }

    // Prevent the default form submission
    echo '<script>event.preventDefault();</script>';
}
?>