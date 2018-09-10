<?php
require_once 'connexion.php';
$password =
if (!empty($_POST['submit'])) {
    $ajouter = "INSERT INTO `User` 
      (`id`, `users`, `password`) 
     VALUES 
      (NULL,:users, :password);";

    $stmt = $pdo->prepare($ajouter);
    $stmt->bindValue(':users', $_POST['job']);
    $stmt->bindValue(':password', $password);
    $stmt->execute();
    header('Location: show.php');

}