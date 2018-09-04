<?php
require_once 'connexion.php';
if (!isset($_POST['id'])) {
    header("Location: index.php?error=noidtodelete");
    exit;
}

$suprime = "DELETE FROM
  `job` 
WHERE
  `id` = :id
;";
$stmt = $pdo->prepare($suprime);
$stmt->bindValue(':id', $_POST['id']);
$stmt->execute();
header('Location: index.php');
errorHandler($stmt);
header("Location: index.php");
