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
    <form  action="doAdd.php" method="post">
        <input type="text" name="job" placeholder="Nom du job" >
        <input type="text" name="duration" placeholder="durée du job">
        <input type="text" name="information" placeholder="durée du job">
        <select name="color" id="color">
            <option value="yellow">jaune</option>
            <option value="red">rouge</option>
            <option value="blue">bleu</option>
            <option value="green">vert</option>
        </select>
        <input type="submit" name="submit" value="Envoyer" class="envoie">
    </form>
    <a href="show.php">vers la page show</a>
</div>
