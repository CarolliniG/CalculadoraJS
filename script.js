const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".buttons button");

let currentNumber = "";
let firstOperand = null;
let operador = null;
let restart = false;

function updateresult(originClear = false){
    result.innerText = originClear ? 0 : currentNumber.replace(".",",");
}

function addDigit(digit){
    if (digit === "," && (currentNumber.includes(",") || currentNumber))
    return;

    if (restart){
        currentNumber = digit;
        restart = false;
    } else {
        currentNumber += digit;
    }

    updateresult();
}

buttons.forEach(button)=>{
    button.addEventListener("click",()=>{ const buttonText = button.innerText;
    if (/^[0-9]+$/test(buttonText)){
        addDigit(buttonText);
        }
    });
};