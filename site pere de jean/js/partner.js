var containerpartner = document.querySelector('.container-partner');
var containchoice = document.querySelectorAll('.contain-choice');
var test = document.querySelector('.container-sort')
lolo=0;


function partner() {
  for (var i = 0; i < data2.partner.length; i++) {
    var addpartner = "<li class='contain-partner'>";
     addpartner += "  <a href='";
     addpartner += data2.partner[i].linkimg;
     addpartner += "'>" ;
     addpartner += "<img class='img-partner' src='./assets/image/Logos/";
     addpartner += data2.partner[i].img;
     addpartner += "' alt=''>"
     addpartner += "</a>"
     addpartner += "</li>"
     console.log(data2.partner[i].linkimg);
     containerpartner.innerHTML += addpartner;
  }

}



    partner()
    console.log('yolo');
