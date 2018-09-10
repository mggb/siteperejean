<?php







$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$subjects = $_POST['subject'];
$messages = $_POST['message'];






    ini_set( 'display_errors', 1 );

    error_reporting( E_ALL );

    $from = $email;

    $to = "gelbonmathieu@hotmail.fr";

    $subject = $subjects;

    $message = $messages;

    $headers = "From:" . $from;

    mail($to,$subject,$message, $headers);

    echo "L'email a été envoyé.";
?>


