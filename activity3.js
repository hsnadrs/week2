let input = document.getElementById('inputBox')
let submitBtn = document.getElementById('submitBtn')
let displayText = document.getElementById('displayValue')
let heading = document.getElementById('heading');
submitBtn.addEventListener('click', function () {
    //console.log()
    heading.style.color = inputBox.value;
    input.value = "";
})