const x=document.querySelector('nav ul .event-js');
const body=document.querySelector('body');
const navLink=document.querySelectorAll('nav ul a');
x.addEventListener('click',function(){
    body.classList.toggle("visible");

    document.querySelector('h1').classList.toggle('changcolorlink');

    document.querySelector('p').classList.toggle('changcolorlink');

   let linkColor= document.querySelectorAll('a');
   for (let i = 0; i < linkColor.length; i++) {
    linkColor[i].classList.toggle('changcolorlink');
   }
   document.querySelector('#home .left-home a').classList.toggle('.button_js');
});
// button_js