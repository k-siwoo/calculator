const input = document.getElementById('input');
const abs = document.getElementById('abs');

let value = [0];
let a = 0;
let num = 0;

abs.textContent = value.join(' ');

const numberInput = (number) => {
  document.getElementById(number).addEventListener('click', () => {
    abs.textContent = number;
    if(typeof value[a] !== 'number'){
      value.push(number);
      input.textContent = value.join(' ');
    }
    else if(typeof value[a] === 'number'){
      value[a] = (value[a] * 10) + number;
      input.textContent = value.join(' ');
      if(value[a] > 9999999999999){
        input.textContent = 'error';
        value =[0];
      }
    }
  });
}

const operatorInput = (id,operator) => {
  document.getElementById(id).addEventListener('click', () => {
    abs.textContent = operator;
    value.push(operator);
    input.textContent = value.join(' ');
    a = 2;
  });
}

document.getElementById('equal').addEventListener('click', () => {
  for(var i = 1; i <= value.length; i++){
    if(value[i] == '+'){
      num = value[i - 1] + value[i + 1];
      if(num < 9999999999999){
      abs.textContent = num;
      value = [num];
      input.textContent = value.join(' ');
    }
    else{
      input.textContent = 'error';
      value = [0];
    }
    a = 0;
    }
    else if(value[i] == '-'){
      num = value[i - 1] - value[i + 1];
      if(num < 9999999999999){
        abs.textContent = num
        value = [num];
        input.textContent = value.join(' ');
      }
      else{
      input.textContent = 'error';
      value = [0];
    }
        a = 0;
    }
    else if(value[i] == 'x'){
      num =  value[i - 1] * value[i + 1];
      if(num < 9999999999999){
        abs.textContent = num
        value = [num];
        input.textContent = value.join(' ');
      }
      else{
      input.textContent = 'error';
      value =[0];
    }
      a = 0;
    }
    else if(value[i] == '/' && value[i + 1] !== 0){
      num = (value[i - 1] / value[i + 1]).toFixed(3);
      if(num < 9999999999999){
        abs.textContent = num
        value = [num];
        input.textContent = value.join(' ');
      }
      else{
      input.textContent = 'error';
      value = [0];
    }
      a = 0;
    }
    else{
      input.textContent = 'error';
      value = [0];
      a = 0;
    }
  }
});

numberInput(7);
numberInput(8);
numberInput(9);
numberInput(4);
numberInput(5);
numberInput(6);
numberInput(0);
numberInput(1);
numberInput(2);
numberInput(3);
operatorInput('plus','+');
operatorInput('div','/');
operatorInput('minus','-');
operatorInput ('multi','x');
document.getElementById('c').addEventListener('click', () => {
input.textContent = ' '
value = []
abs.textContent = value.join(' ');
value = [];
});