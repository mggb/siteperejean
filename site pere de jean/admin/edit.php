<?php
require_once 'connexion.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>ajoute</title>
</head>
<body>
<?php
$editjob =" SELECT
           `id`, `job`, `duration`, `information`, `color`
           FROM
            `job`
            WHERE
            `id`= :id

            ;";
$stmt = $pdo->prepare($editjob);
  $stmt->bindValue(':id', $_GET['id']);
$stmt->execute();
?>
<a href="show.php">allez la page show</a><br>
<?php if (false !== $row = $stmt->fetch(PDO::FETCH_ASSOC)) :?>
<form  action="doEdit.php" method="post">
    <input  id="prodId" name="id" type="hidden" value="<?=$row["id"]?>">
    <input type="text" value="<?=$row["job"]?>" name="job" placeholder="Nom du job" >
    <input type="text" value="<?=$row["duration"]?>" name="duration" placeholder="durée du job">
    <input type="text" value="<?=$row["information"]?>" name="information" placeholder="durée du job">
    <select value="<?=$row["color"]?>" name="color" id="color">
        <option value="blue">yellow</option>
        <option value="red">rouge</option>
        <option value="blue">bleu</option>
        <option value="green">vert</option>
    </select>
    <input  value="submit"type="submit" name="submit"  class="envoie">
</form>
<?php endif;?>
</body>
</html>
