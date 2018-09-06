<?php
require_once 'admin/connexion.php';
?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/size.css">
  <link rel="stylesheet" href="css/home.css">
  <link rel="stylesheet" href="css/anim.css">
  <link rel="stylesheet" href="css/menu.css">
  <link rel="stylesheet" href="css/job.css">

  <title>Document</title>
</head>

<body class="body">
  <header class="headerNav">
    <nav class="containerLogoAndMenu">
      <div class="containerMenu">
        <img class="menu" src="assets/image/menu.svg" alt="menu">
      </div>
      <div class="test">
        <img class="close" src="assets/image/croix.svg" alt="close">
        <ul class="list-link">
          <a href="#">
            <li class="link-menu">Aceuil</li>
          </a>
          <a href="">
            <li class="link-menu">Le cabinet</li>
          </a>
          <a href="">
            <li class="link-menu">Pack services</li>
          </a>
          <a href="">
            <li class="link-menu">Contacter nous</li>
          </a>
          <a href="">
            <li class="link-menu">recrutement</li>
          </a>
          <a href="">
            <li class="link-menu">Liens utile</li>
          </a>
          <a href="">
            <li class="link-menu">Votre espace</li>
          </a>

        </ul>
        <div class="container-information-menu">
          <p class="title-information-menu">information</p>
          <p class="subtitle-information-menu">Adresse du cabinet</p>
          <p class="text-information-menu">7 Mail Haroun Tazieff, 44300 Nantes</p>
          <p class="subtitle-information-menu">numéro</p>
          <p class="text-information-menu">0251831902</p>
          <p class="title-information-menu">Newletter</p>
          <form action=""></form>
          <input type="email" name="mail" value="">
          <button type="submit" name="button"></button>
        </div>
      </div>
      <div class="containerLogo">
        <img class="imageLogo" src="assets/image/logo.png" alt="logo">
      </div>
    </nav>
  </header>
  <?php
  $affiche =" SELECT
              `id`, `job`, `duration`, `information`, `color`
             FROM
              `job`
              ;"; /* on  recupere les donnée id competence intitulé resume dateStart et datefinish de tableau Mysql 'anonce'*/
  $stmt = $pdo->prepare($affiche);
  $stmt->execute();
  ?>

  <section class="container-page-job">
    <p class="text-start-page-job">
      Vous voulez nous rejoindre ? Voici nos dernières offres d’emplois
    </p>
    <ul class="container-block-jobs">
      <?php while (false !== $row = $stmt->fetch(PDO::FETCH_ASSOC)) :?>
      <li class="container-block-job <?=$row["color"]?>">
        <h3 class="title-block-job"><?=$row["job"]?></h3>
        <p class="duration-block-job"><?=$row["duration"]?></p>
        <p class="text-block-job"><?=$row["information"]?></p>
        <a class="link-block-job" href="">
          <p>Contacter Nous</p>
        </a>
      </li>
          <?php endwhile;?>
    </ul>
  </section>



  <?php include('footer.php'); ?>
</body>
<script type="text/javascript" src="js/data.js"></script>
<script type="text/javascript" src="js/script.js"></script>

</html>
