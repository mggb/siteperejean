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
  <link rel="stylesheet" href="css/form.css">

  <title>Document</title>
</head>

<body class="body">
<?php include('header.php'); ?>
  <section class="contaiiner-form">
    <div class="contain-form">


      <p class="text-in-form pageone">on est la pour vous.</p>
      <form class="" action="email.php" method="post">
        <input class="input-and-area-style pageone" type="text" name="name" placeholder="nom" value="">
        <input class="input-and-area-style pagetwo" type="text" name="phone"placeholder="telephone" value="">
        <input class="input-and-area-style pagetwo" type="email"placeholder="email"name="email" value="">
        <input class="input-and-area-style pagetwo" type="text" name="subject" placeholder="objet du mail"value="">
        <textarea class="areastyle pagetwo" placeholder="message"name="message" rows="8" cols="80"></textarea>
        <input class="submit-style pagetwo" type="submit" name="" value="Envoyer">
      </form>
      <p class="button-next pageone">Suivant</p>
    </div>
  </section>
</body>
<script type="text/javascript" src="js/data.js"></script>
<script type="text/javascript" src="js/script.js"></script>
</html>
