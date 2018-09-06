var containerpartner = document.querySelector('.container-partner');

var test = document.querySelector('.container-sort')
var sort = document.querySelector('.sort')
var containchoice  = document.querySelector('.container-choice-partner')
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
     containerpartner.innerHTML += addpartner;
  }

}

    partner()

sort.addEventListener('click',function () {

  containerpartner.innerHTML =  '';
    for (var i = 0; i < data2.partner.length; i++) {


      if (data2.partner[i].categorie + '' == containchoice.value  ) {
        var addpartner = "<li class='contain-partner'>";
         addpartner += "  <a href='";
         addpartner += data2.partner[i].linkimg;
         addpartner += "'>" ;
         addpartner += "<img class='img-partner' src='./assets/image/Logos/";
         addpartner += data2.partner[i].img;
         addpartner += "' alt=''>"
         addpartner += "</a>"
         addpartner += "</li>"
         containerpartner.innerHTML += addpartner;
        }

  }
  if (containchoice.value == 'totalité') {
    partner()
  }
})


var menu = document.querySelector('.menu');
var close = document.querySelector('.close')
var openmenu = document.querySelector('.test')

menu.addEventListener('click',function () {
  openmenu.style.display = ' block'
});
close.addEventListener('click',function () {
  openmenu.style.display = ''
});
