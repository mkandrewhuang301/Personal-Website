<?php

if(isset($_POST['submit']) ){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $mailTo = "andyallenhuang@gmail.com";
    $headers = "From: " .$mailFrom;
    $txt = "You have recieved an e-mail from " .$name. ".\n\n " .$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: inded.php?mailsend");

}