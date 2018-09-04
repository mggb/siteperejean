<?php
require_once 'connexion.php';
$modifie = "UPDATE
`job`
SET
`job` = :job,
`duration` = :duration,
`information` = :information,
`color` = :color
WHERE
`id` = :id
;";
$stmt = $pdo->prepare($modifie);
$stmt->bindValue(':id', $_POST['id']);
$stmt->bindValue(':job', $_POST['job']);
$stmt->bindValue(':duration', $_POST['duration']);
$stmt->bindValue(':information', $_POST['information']);
$stmt->bindValue(':color', $_POST['color']);
$stmt->execute();
header('Location: index.php');
