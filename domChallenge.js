// document.addEventListener ( 'keydown', (event)=>{
   

//     let keyCode = event.code ;
//     let elementCode1= document.getElementById('code');
//     elementCode1.innerHTML = keyCode; 
//     let charCode1 = event.key ;
//      //let charstring= String.fromCharCode(charCode1);
//     let elementCode3= document.getElementById('value');
//     console.log(charCode1);
//     elementCode3.innerHTML = charCode1; 
// })
document.addEventListener("keydown", function (event) {
    // declaring variablr asigning them to access element from html page using getElementByID 
    let keyDisplay = document.getElementById("keyDisplay");
    let keyCodeDisplay = document.getElementById("code");
    let keyKey = document.getElementById("key");
    let keyWhich = document.getElementById("value");
    let keyLocation = document.getElementById("location");
   //declaring variable asigning them to method to get key ,its code,and which key is press
    let keyDown = event.key;
    let keyCode = event.code;
    let Which = event.which;
    let location = event.location;
    //manupulating html page by asigning them with new value 

    keyDisplay.innerHTML = keyDown;
 
    keyCodeDisplay.innerHTML = keyDown
    keyKey.innerHTML = keyCode
    keyWhich.innerHTML = Which;
    keyLocation.innerHTML = location;

})