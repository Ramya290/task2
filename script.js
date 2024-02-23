document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
    const clearBtn = document.getElementById('clear');
    const calculateBtn = document.getElementById('calculate');
  
    let currentInput = '';
    let calculation = [];
    
    numbers.forEach(number => {
      number.addEventListener('click', function() {
        currentInput += this.value;
        display.value = currentInput;
      });
    });
  
    operators.forEach(operator => {
      operator.addEventListener('click', function() {
        currentInput += this.value;
        display.value = currentInput;
      });
    });
  
    clearBtn.addEventListener('click', function() {
      currentInput = '';
      calculation = [];
      display.value = '';
    });
  
    calculateBtn.addEventListener('click', function() {
      if (currentInput !== '') {
        calculation.push(currentInput);
      }
  
      const result = eval(calculation.join(' '));
      display.value = result;
      currentInput = '';
      calculation = [];
    });
  });
  