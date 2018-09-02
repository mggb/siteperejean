var menu = document.querySelector('.menu');
var close = document.querySelector('.close')
var openmenu = document.querySelector('.test')

menu.addEventListener('click',function () {
  openmenu.style.display = ' block'
});
close.addEventListener('click',function () {
  openmenu.style.display = ''
});


function name() {

  var listpack = document.querySelectorAll('.textinlistPack')
  var pagepack = document.querySelector('.container-page-pack');
  var titleHeaderPack = document.querySelector('.titlePagePack')
  var levrailistpack = document.querySelectorAll('.ListPack')

  for (let i = 0; i < listpack.length; i++) {
  listpack[i].addEventListener('click', function () {


    if (listpack[i].textContent == titleHeaderPack.textContent ) {
      console.log(listpack[i].textContent);
     if (listpack[i].textContent ===  'Pack créateur' ) {
       listpack[i].classList.add("red");
     }
     if (listpack[i].textContent == 'Pack comptabilité' ) {
       listpack[i].classList.add("blue");
     }
     if (listpack[i].textContent == 'Pack paie & RH' ) {
       levrailistpack[i].classList.add("yellow");
       console.log(levrailistpack[i]);
       console.log('je suis legal');
     }

    }
      console.log('ahh');
      var content = "<div class='ContainerHeaderPack'>";
           content += "<div class='container-header-pack'>";
             content += "<div class='containerImage'>";
               content += "<img class='imageheaderpack' src='";
               content += data.pack[i].img;
               content += "'alt='work'>";
             content += "</div>";
             content += "<div class='containerTitleHeaderPack'>";
               content += "<h2 class='titlePagePack'>";
               content += data.pack[i].title;
               content += "</h2>";
             content += "</div>";
           content += "</div>";
           content += "  <ul class='containerListPack'>";
             content += "<li class='ListPack'>";
               content += "<p class='textinlistPack'>Pack créateur</p>";
             content += "</li>";
             content += "<li class='ListPack'>";
               content += "<p class='textinlistPack'>Pack comptabilité</p>";
             content += "</li>";
             content += "<li class='ListPack'>";
               content += "<p class='textinlistPack'>Pack paie & RH</p>";
             content += "</li>";
           content += "</ul>";
         content += "</div>";
         content += "<div>";
           content += "<section class='sizesection SecondSection'>";
             content += "<p class='header-page-information text-presentation-pack'>";
             content += data.pack[i].description;
             content += "</p>";
             content += "<img class='SecondSection-image-work' src='";
             content += data.pack[i].imgbody;
             content += "'alt='work'>";
             content += "<h3 class='title-list-container-pack'>";
             content += data.pack[i].containeurlist;
             content += "</h3>";
             content += "<ul class='container-list-pack'>";
               content += "<li class='contain-list-pack'>";
               content += data.pack[i].text1;
               content += "</li>";
               content += "<li class='contain-list-pack'>";
               content += data.pack[i].text2;
               content += "</li>";
               content += "<li class='contain-list-pack'>";
               content += data.pack[i].text3;
               content += "</li>";
               content += "<li class='contain-list-pack'>"
               content += data.pack[i].text4;
               content += "</li>";
               content += "<li class='contain-list-pack'>";
               content += data.pack[i].text5;
               content += "</li>";
               content += "<li class='contain-list-pack'>";
               content += data.pack[i].text6;
               content += "</li>";
             content += "</ul>";
           content += "</section>";
         content += "</div>";
       content += "</section>";

     pagepack.innerHTML=content;

      name()
    })
   }
}
name()




/* page form */

var nextpage = document.querySelector('.button-next');
var input = document.querySelectorAll('.input-and-area-style');
var pageone = document.querySelectorAll('.pageone');
var pagetwo = document.querySelectorAll('.pagetwo')

nextpage.addEventListener('click', function () {
  for (var i = 0; i < input.length; i++) {
    if (input[0].value == '') {
      alert("Les champs ne sont pas remplie corectement");
    }
    else {
      for (var i = 0; i < pageone.length; i++) {
        pageone[i].style.display = "none";
      }
      for (var i = 0; i < pagetwo.length; i++) {
        pagetwo[i].style.display = "block";
      }
    }
  }
})
