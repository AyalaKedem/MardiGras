const inputFName = document.getElementById("inputFName");
const inputLName = document.getElementById("inputLName")
const inputEmail = document.getElementById("inputEmail");
const inputNumber = document.getElementById("inputNumber");
const textArea = document.getElementById("textArea");
const formBtn =  document.getElementById("formBtn");
const pop = document.getElementById('pop');

formBtn.addEventListener("click", () => {
    if(inputFName.value == "" ){
        inputFName.style.border = "2px solid #9453A6"; 
    } else {
        inputFName.style.border = "1px solid #ccc";
    }
    if(inputLName.value == "" ){
        inputLName.style.border = "2px solid #9453A6"; 
    } else {
        inputLName.style.border = "1px solid #ccc";
    }
    if(inputEmail.value == "" || inputEmail.value.indexOf('@') == -1 ){
        inputEmail.style.border = "2px solid #9453A6";
    } else {
        inputEmail.style.border = "1px solid #ccc";
    }
    if(inputNumber.value == ""){
        inputNumber.style.border = "2px solid #9453A6";
    } else {
        inputNumber.style.border = "1px solid #ccc";
    }
    if(textArea.value == ""){
        textArea.style.border = "2px solid #9453A6";
    } else {
        textArea.style.border = "1px solid #ccc";
    }
});