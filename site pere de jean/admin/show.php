<?php
require_once 'connexion.php';
?>

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="css/style.css">
    <title>SHOW</title>
</head>
<body>
<?php
$affiche =" SELECT
             `id`, `job`, `duration`, `information`, `color`
           FROM
            `job`

            ;"; /* on  recupere les donnée id competence intitulé resume dateStart et datefinish de tableau Mysql 'anonce'*/
$stmt = $pdo->prepare($affiche);
$stmt->execute();
?>
<h1 class="annonce-titre">Tout les post</h1>
<a href="index.php">retourner vers la page admin</a>
<section class="container-annonce">
      <?php while (false !== $row = $stmt->fetch(PDO::FETCH_ASSOC)) :?>
        <div class="paragraphe">
            <div >
                <p>job : <?=$row["job"]?></p><br>
                <p>durée : <?=$row["duration"]?></p><br>
                <p>information : <?=$row["information"]?></p><br>
                <p>couleur : <?=$row["color"]?></p><br>

        </div>
        </div>
        <a href="delete.php?id=<?=$row["id"]?>">suprimé</a>
        <a href="edit.php?id=<?=$row["id"]?>">modifié</a>

    <?php endwhile;?>
</section>
</body>
