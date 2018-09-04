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
  var pagepack2 = document.querySelector('.container-page-pack2');
  var levrailistpack = document.querySelectorAll('.ListPack')
  var before = listpack[0];


  for (let i = 0; i < listpack.length; i++) {
  listpack[i].addEventListener('click', function () {



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

           // content += "  <ul class='containerListPack'>";
           //   content += "<li class='ListPack'>";
           //     content += "<p class='textinlistPack'>Pack créateur</p>";
           //   content += "</li>";
           //   content += "<li class='ListPack'>";
           //     content += "<p class='textinlistPack'>Pack comptabilité</p>";
           //   content += "</li>";
           //   content += "<li class='ListPack'>";
           //     content += "<p class='textinlistPack'>Pack paie & RH</p>";
           //   content += "</li>";
           // content += "</ul>";

        var content2 = "</div>";
         content2 += "<div>";
           content2 += "<section class='sizesection SecondSection'>";
             content2 += "<p class='header-page-information text-presentation-pack'>";
             content2 += data.pack[i].description;
             content2 += "</p>";
             content2 += "<img class='SecondSection-image-work' src='";
             content2 += data.pack[i].imgbody;
             content2 += "'alt='work'>";
             content2 += "<h3 class='title-list-container-pack'>";
             content2 += data.pack[i].containeurlist;
             content2 += "</h3>";
             content2 += "<ul class='container-list-pack'>";
               content2 += "<li class='contain-list-pack'>";
               content2 += data.pack[i].text1;
               content2 += "</li>";
               content2 += "<li class='contain-list-pack'>";
               content2 += data.pack[i].text2;
               content2 += "</li>";
               content2 += "<li class='contain-list-pack'>";
               content2 += data.pack[i].text3;
               content2 += "</li>";
               content2 += "<li class='contain-list-pack'>"
               content2 += data.pack[i].text4;
               content2 += "</li>";
               content2 += "<li class='contain-list-pack'>";
               content2 += data.pack[i].text5;
               content2 += "</li>";
               content2 += "<li class='contain-list-pack'>";
               content2 += data.pack[i].text6;
               content2 += "</li>";
             content2 += "</ul>";
           content2 += "</section>";
         content2 += "</div>";
       content2 += "</section>";


     pagepack.innerHTML=content;
     pagepack2.innerHTML=content2;

     var titleHeaderPack = document.querySelector('.titlePagePack');
     var fulllistcontain = document.querySelectorAll('.contain-list-pack')

      for (var y = 0; y < fulllistcontain.length; y++) {

       if (fulllistcontain[y].textContent == "undefined" ) {
         fulllistcontain[y].style.display = "none"
       }
      }


    if (listpack[i] == listpack[0]) {
      before.classList.remove("blue")
      before.classList.remove("yellow")
      levrailistpack[i].classList.add("red");
      titleHeaderPack.style.color = "red"
    }
    if (listpack[i] == listpack[1]) {
      before.classList.remove("red")
      before.classList.remove("yellow")
      levrailistpack[i].classList.add("blue");
      titleHeaderPack.style.color = "blue"
    }
    if (listpack[i] == listpack[2]) {
      before.classList.remove("red")
      before.classList.remove("blue")
      levrailistpack[i].classList.add("yellow");
      titleHeaderPack.style.color = "yellow"
    }
    before= levrailistpack[i];
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



/* page partner */

var containerpartner = document.querySelector('.container-partner');
var containchoice = document.querySelectorAll('.contain-choice');


function partner() {
  for (var i = 0; i < data2.partner; i++) {
    data2[i]
  }
}
