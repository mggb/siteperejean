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
  for (let i = 0; i < listpack.length; i++) {
  listpack[i].addEventListener('click', function () {
      console.log('ahh');
      var content = "<div class='ContainerHeaderPack'>";
           content += "<div class='container-header-pack'>";
             content += "<div class='containerImage'>";
               content +="<img class='imageheaderpack' src="+data.pack[i].img+"alt=''>";
             content += "</div>";
             content += "<div class='containerTitleHeaderPack'>";
               content += "<h2 class='titlePagePack'>";
               content += data.pack[i].title;
               content += "</h2>";
             content += "</div>";
           content += "</div>";
           content += "  <ul class='containerListPack'>";
             content += "<li class='ListPack'>";
               content += "<p class='textinlistPack'>pack createur</p>";
             content += "</li>";
             content += "<li class='ListPack'>";
               content += "<p class='textinlistPack'>pack complet</p>";
             content += "</li>";
             content += "<li class='ListPack'>";
               content += "<p class='textinlistPack'>pack complet</p>";
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
