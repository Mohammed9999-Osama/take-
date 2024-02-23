
let allItem = Array.from(document.querySelectorAll(" #item img"));
let overlay =document.querySelector('#overlay');
let ovImg = document.querySelector("#ovImg");
let btnRight = document.querySelector(".r");
let btnLeft = document.querySelector(".l");
let btnClos = document.querySelector("#x");
let index;
allItem.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        console.log(e);
        ovImg.style.backgroundImage = `url(${e.target.getAttribute("src")})`;
        overlay.style.display="flex"
        index =allItem.indexOf(e.target);
    })
})
btnClos.onclick=()=>{
    clos()
}
btnRight.onclick = () => {
  Right();
};
btnLeft.onclick = () => {
  priv();
};
function Right(){
    index++
    if (index == allItem.length) {
        index=0
    }
    ovImg.style.backgroundImage = `url(${allItem[index].getAttribute("src")})`;
}
function priv() {
  index--;
  if (index <0) {
    index = allItem.length-1;
  }
  ovImg.style.backgroundImage = `url(${allItem[index].getAttribute("src")})`;
}
function clos(){
    overlay.style.display = "none";
}
document.addEventListener('keydown',(e)=>{
    console.log(e);
       if(e.code == "ArrowRight"){
        Right()
    }else if(e.code == "ArrowLeft"){
        priv()
    }else if(e.code == "Escape"){
        clos()
    }
})
overlay.addEventListener("click", (e) => {
    
  if (e.target != ovImg && e.target != btnLeft && e.target != btnRight) {
    clos();
  }
});







































































// let allItem =Array.from(document.querySelectorAll(' #item img'));
// let btnleft =document.querySelector('.l');
// let btnright =document.querySelector('.r');
// let overlay =document.getElementById('overlay');
// let Close =document.getElementById('x');
// let ovImg =document.getElementById('ovImg');

// let currentIndex;
// //&$$$$$$$$$$$$$$$$$$$$$$4$$$$$$$$$$$$$$$$$$$$$$$$$44444
// allItem.forEach((item)=>{
//     // console.log(item);
//     item.addEventListener('click',(e)=>{
//         // console.log(e.target.src);
//         overlay.style.display ="flex" 
//         ovImg.style.backgroundImage =`url(${e.target.getAttribute('src')})`
//         // console.log(e.target.src);
//         // console.log(e.target.getAttribute('src'));

//          currentIndex = allItem.indexOf(e.target) 


        
//     })
// })
// //&$$$$$$$$$$$$$$$$$$$$$$4$$$$$$$$$$$$$$$$$$$$$$$$$44444


// btnright.addEventListener('click',next)
// btnleft.addEventListener('click',priv)
// Close.addEventListener('click', xClose)

// function xClose(){
//     overlay.style.display ="none"
// }
// function next(){
//     currentIndex++
//     if(currentIndex == allItem.length)(
//         currentIndex=0
//     )
//     // console.log(allItem[currentIndex +1]);
//     ovImg.style.backgroundImage =`url(${allItem[currentIndex].getAttribute('src')})`
    

// }
// function priv(){
//     currentIndex--
//     if(currentIndex <0 )(
//         currentIndex=allItem.length-1
//     )
//     // console.log(allItem[currentIndex +1]);
//     ovImg.style.backgroundImage =`url(${allItem[currentIndex].getAttribute('src')})`
    
// }

// document.addEventListener("keydown" ,(e)=>{
//     console.log(e);
//     if(e.code == "ArrowRight"){
//         next()
//     }else if(e.code == "ArrowLeft"){
//         priv()
//     }else if(e.code == "Escape"){
//         xClose()
//     }
// })

// overlay.addEventListener('click',(e)=>{
//     if(e.target !=ovImg && e.target !=btnleft &&e.target !=btnright){
//         xClose()
//     }
// })






