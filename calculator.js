// let btn = document.querySelector("#btn");

// let value = '';

// btn.onclick = () => {
//   value += '1';
//   console.log(value);
// };


let input = document.getElementsByName("display")[0];

    let btn1 = document.querySelector("#btn1");

    btn1.addEventListener('click', () => {
      input.value += '1';  
      
    });

let btn2 = document.querySelector("#btn2");

    btn2.addEventListener('click', () => {
      input.value += '2';  
      
    });

let btn3 = document.querySelector("#btn3");

    btn3.addEventListener('click', () => {
      input.value += '3';  
      
    });

let btn4 = document.querySelector("#btn4");

    btn4.addEventListener('click', () => {
      input.value += '4';  
      
    });

let btn5 = document.querySelector("#btn5");

    btn5.addEventListener('click', () => {
      input.value += '5';  
      
    });

let btn6 = document.querySelector("#btn6");

    btn6.addEventListener('click', () => {
      input.value += '6';  
      
    });

let btn7 = document.querySelector("#btn7");

    btn7.addEventListener('click', () => {
      input.value += '7';  
      
    });
let btn8 = document.querySelector("#btn8");

    btn8.addEventListener('click', () => {
      input.value += '8';  
      
    });
let btn9 = document.querySelector("#btn9");

    btn9.addEventListener('click', () => {
      input.value += '9';  
      
    });

let btnAC = document.querySelector("#btnAC");

    btnAC.addEventListener('click', () => {
      input.value = '';  
      
    });

let btnDE = document.querySelector("#btnDE");

    btnDE.addEventListener('click', () => {
       input.value = input.value.slice(0, -1);
      
    });

let btnSlash = document.querySelector("#btn\\/");

btnSlash.addEventListener('click', () => {
  input.value += '/';  
});


let btnDot = document.querySelector("#btn\\.");

btnDot.addEventListener('click', () => {
  input.value += '.';  
});

let btnstar = document.querySelector("#btn\\*");

btnstar.addEventListener('click', () => {
  input.value += '*';  
});

let btnPlus = document.querySelector("#btn\\+");

btnPlus.addEventListener('click', () => {
  input.value += '+';  
});

let btnMinus = document.querySelector("#btn\\-");

btnMinus.addEventListener('click', () => {
  input.value += '-';  
});
let btn00 = document.querySelector("#btn00");

btn00.addEventListener('click', () => {
  input.value += '00';  
});
let btn0 = document.querySelector("#btn0");

btn0.addEventListener('click', () => {
  input.value += '0';  
});

let btnEqual = document.querySelector("#btn\\=");

btnEqual.addEventListener('click', () => {
  input.value = eval(input.value);  
});