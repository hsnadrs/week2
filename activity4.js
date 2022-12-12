let x=0;
let y=0;
let pContent = document.getElementById ("clicking");

document.addEventListener ( 'click', ()=>{
   

    x= event.clientX;
    y= event.clientY;
    pContent.innerHTML = "X coords: " + x + ", Y coords: " + y;
   
})