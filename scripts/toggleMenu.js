const menuBtn=document.querySelector('.menu-icon');
const nav=document.querySelector('nav')
let closed=true;

menuBtn.addEventListener('click', function handleClick() {
    if(!closed){
        closed=true;
        menuBtn.innerHTML=`<img src="../assets/icons/menu.svg" alt="">`
        //top of nav should be -500px
        nav.style=`top:-500px `

    }else{
        closed=!closed;
        nav.style=`top:45px `
        menuBtn.innerHTML=`<img src="../assets/icons/close.svg" alt="">`

    }
    
  });