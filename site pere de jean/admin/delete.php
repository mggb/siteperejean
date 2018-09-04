<?php
require_once 'connexion.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Poster un message</title>
</head>
<body>
<?php
$delete =" SELECT
           `id`, `job`, `duration`, `information`, `color`
           FROM
            `job`
            WHERE
            `id`= :id
            ;";
$stmt = $pdo->prepare($delete);
$stmt->bindValue(':id', $_GET['id']);
$stmt->execute();
?>
<a href="show.php">redirection show</a><br>
<?php if (false !== $row = $stmt->fetch(PDO::FETCH_ASSOC)) :?>
    tu veux suprimer la poste de  <?=$row["job"]?>
<form  action="doDelete.php" method="post">
    <input  id="prodId" name="id" type="hidden" value="<?=$row["id"]?>">
    <input type="submit" name="submit" value="Oui" class="envoie">
</form>
    <button type="button" name="button"><a href="show.php">non</a></button>
<?php endif;?>
<a href="index.php">admin</a><br>
</body>
</html>
