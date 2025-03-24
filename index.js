const displayElm = document.querySelector('.display');

const btn0 = document.getElementById('btn-0');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');
const btn7 = document.getElementById('btn-7');
const btn8 = document.getElementById('btn-8');
const btn9 = document.getElementById('btn-9');

const handleDigitClick = (event) => {
    
    const digit = event.target.textContent;

    if (displayElm.textContent.length === 9) {
        return;
    }

    displayElm.textContent += digit;
}

btn0.addEventListener('click', handleDigitClick);
btn1.addEventListener('click', handleDigitClick);
btn2.addEventListener('click', handleDigitClick);
btn3.addEventListener('click', handleDigitClick);
btn4.addEventListener('click', handleDigitClick);
btn5.addEventListener('click', handleDigitClick);
btn6.addEventListener('click', handleDigitClick);
btn7.addEventListener('click', handleDigitClick);
btn8.addEventListener('click', handleDigitClick);
btn9.addEventListener('click', handleDigitClick);