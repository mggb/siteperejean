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
     console.log(data2.partner[i].linkimg);
     containerpartner.innerHTML += addpartner;
  }

}

    partner()

sort.addEventListener('click',function () {
  // container.innerHTML = '';
  // console.log('yolo');
    for (var i = 0; i < data2.partner.length; i++) {
      console.log('data2.partner[i].categorie');
      if (data2.partner[i].categorie == containchoice.value  ) {
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
