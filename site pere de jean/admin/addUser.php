<?php
require_once 'connexion.php';
?>
<!DOCTYPE html>
<html>
<head>
    <title>ajouter</title>
</head>
<a href="show.php">retourner vers la page admin</a>

<div class="formulaire">
    <h2 class="title">ajouter:</h2>
    <form  action="DoAddUser.php" method="post">
        <input type="text" name="user" placeholder="User" >
        <input type="password" name="password" placeholder="password">

        <input type="submit" name="submit" value="Envoyer" class="envoie">
    </form>
    <a href="show.php">vers la page show</a>
</div>
