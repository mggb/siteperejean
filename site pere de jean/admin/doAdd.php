<?php
require_once 'connexion.php';

if (!empty($_POST['submit'])) {
    $ajouter = "INSERT INTO `job` 
      (`id`, `job`, `duration`, `information`, `color`) 
     VALUES 
      (NULL,:job, :duration, :information, :color);";

    $stmt = $pdo->prepare($ajouter);
    $stmt->bindValue(':job', $_POST['job']);
    $stmt->bindValue(':duration', $_POST['duration']);
    $stmt->bindValue(':information', $_POST['information']);
    $stmt->bindValue(':color', $_POST['color']);
    $stmt->execute();
    header('Location: show.php');

}