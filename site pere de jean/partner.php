
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
  <link rel="stylesheet" href="css/partner.css">

  <title>Document</title>
</head>

<body class="body">
<?php include('header.php'); ?>
  <section class="container-page-partner">


    <div class="container-sort">

      <p class="text-partner information-sort">information</p>
      <select class="container-choice-partner" name="choice" id="choice">
          <option class="contain-choice" value="sociales">sociale</option>
          <option class="contain-choice" value="comptables">comptables</option>
          <option class="contain-choice" value="juridique">juridique</option>
          <option class="contain-choice" value="statistiques">statistiques</option>
          <option class="contain-choice" value="bancaire">bancaire</option>
          <option class="contain-choice" value="totalité">totalité</option>


      </select>
      <p class="text-partner sort">Trier</p>
    </div>
    <p class="information-link">Liens utiles</p>

    <section class="container-partners">
      <ul class="container-partner">

      </ul>
    </section>
  </section>








<?php include('footer.php'); ?>
  </body>
  <script type="text/javascript" src="js/data.js"></script>
  <script type="text/javascript" src="js/partner.js"></script>
  </html>
