var menu = document.querySelector('.menu');
var close = document.querySelector('.close')
var openmenu = document.querySelector('.test')

menu.addEventListener('click',function () {
  openmenu.style.display = ' block'
});
close.addEventListener('click',function () {
  openmenu.style.display = ''
});






///////////
 var pagepack = document.querySelector('.container-page-pack');
 var content = "<div class='ContainerHeaderPack'>";
      content += "<div class='container-header-pack'>";
        content += "<div class='containerImage'>";
          content +="<img class='imageheaderpack' src='";
          content += data.GoodPlace[i].reponse3;
          content +=  " 'alt=''> ";
        content += "</div>";
        content += "<div class='containerTitleHeaderPack'>"
          content += "<h2 class='titlePagePack'>"
          content += data.GoodPlace[i].reponse3;
          content += "</h2>"
        content += "</div>"
      content += "</div>"
      content += "  <ul class='containerListPack'>";
        content += "<li class='ListPack'>";
          content += "<p class='textinlistPack'>pack createur</p>"
        content += "</li>";
        content += "<li class='ListPack'>";
          content += "<p class='textinlistPack'>pack complet</p>";
        content += "</li>";
        content += "<li class='ListPack'>";
          content += "<p class='textinlistPack'>pack complet</p>";
        content += "</li>";
      content += "</ul>";
    content += "</div>";




var section = document.querySelector('.section');
var content = "<div class='container'>";
content += "<div class='question'>";
content += "<p class='textinanswer'>";
content += data.GoodPlace[i].question;
content += "</p>";
content += "</div>";
content += "<div class='containerAwswer'>";
content += "<ul class='ul'>";
content += "<li class='awswer'>";
content += "<p class='textinanswer'data-key=1>";
content += data.GoodPlace[i].reponse1;
content += "</p>";
content += "</li>"
content += "<li class='awswer'>";
content += "<p class='textinanswer'data-key=2>";
content += data.GoodPlace[i].reponse2;
content += "</p>";
content += "</li>";
content += "<li class='awswer'>";
content += "<p class='textinanswer'data-key=3>";
content += data.GoodPlace[i].reponse3;
content += "</p>";
content += "</li>"
content += "</ul>"
content += "<ul class='ul'>";
content += "<li class='awswer'>";
content += "<p class='textinanswer'data-key=4>";
content += data.GoodPlace[i].reponse4;
content += "</p>";
content += "</li>";
content += "<li class='awswer'>";
content += "<p class='textinanswer'data-key=5>";
content += data.GoodPlace[i].reponse5;
content += "</p>";
content += "</li>";
content += "<li class='awswer'>";
content += "<p class='textinanswer'data-key=6>";
content += data.GoodPlace[i].reponse6;
content += "</p>";
content += "</li>";
content += "</ul>";
content += "</div>";
content += "</div>";
section.innerHTML = content;
return section
