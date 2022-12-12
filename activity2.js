let input = document.getElementById('inputBox')
let submitBtn = document.getElementById('submitBtn')
let displayText = document.getElementById('displayValue')
let myImage = document.getElementById('myImage');
submitBtn.addEventListener('click', function () {
    //console.log()
    myImage.src = inputBox.value;
    input.value = "";
})

/*

// Activity 2
const updateImg = document.getElementById('updateImg');
const imageInput = document.getElementById('imageInput');
const displayedImg = document.querySelectorAll('.displayedImg')[0];

updateImg.addEventListener('click', () => {
    displayedImg.src = imageInput.value
    imageInput.value = ""
})
*/