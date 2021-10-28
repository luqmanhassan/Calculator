'use strict';
var display_value = '0';
var number_array = [];
var operator_array = [];
var check = 0;
var check_2 = 0;
var class_number = document.getElementsByClassName('number');
var class_operator = document.getElementsByClassName('operator');
// Number Buttons
for (var i = 0; i < class_number.length; i++) {
  class_number[i].addEventListener('click', numberFunction);
}
function numberFunction() {
  if (
    (display_value === '0' && number_array.length === 0) ||
    (display_value === '0' && number_array.length !== 0)
  ) {
    display_value = this.innerHTML;
    display(display_value);
  } else if (display_value !== '0' && number_array.length === 0) {
    if (check_2 !== 0) {
      display_value = this.innerHTML;
      display(display_value);
      check_2 = 0;
    } else {
      display_value = display_value + '' + this.innerHTML;
      display(display_value);
    }
  } else if (display_value !== '0' && number_array.length !== 0) {
    if (check !== 0) {
      display_value = display_value + '' + this.innerHTML;
      display(display_value);
    } else {
      display_value = this.innerHTML;
      display(display_value);
      check++;
    }
  }
}
function display(x) {
  document.getElementById('display').innerHTML = x;
}
// Operator Buttons
function add(x, y) {
  return Number(x) + Number(y);
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}
class_operator[0].addEventListener('click', divide_operator);
class_operator[1].addEventListener('click', multiply_operator);
class_operator[2].addEventListener('click', subtract_operator);
class_operator[3].addEventListener('click', add_operator);
function divide_operator() {
  number_array.push(display_value);
  operator_array.push(divide);
  if (operator_array.length == 2 && number_array.length == 2) {
    display_value = operator_array[0](number_array[0], number_array[1]);
    display(display_value);
    number_array.shift();
    number_array.shift();
    operator_array.shift();
    number_array.push(display_value);
  }
  if (operator_array.length != 0 && number_array.length != 0) {
    check = 0;
  }
}
function multiply_operator() {
  number_array.push(display_value);
  operator_array.push(multiply);
  if (operator_array.length == 2 && number_array.length == 2) {
    display_value = operator_array[0](number_array[0], number_array[1]);
    display(display_value);
    number_array.shift();
    number_array.shift();
    operator_array.shift();
    number_array.push(display_value);
  }
  if (operator_array.length != 0 && number_array.length != 0) {
    check = 0;
  }
}
function subtract_operator() {
  number_array.push(display_value);
  operator_array.push(subtract);
  if (operator_array.length == 2 && number_array.length == 2) {
    display_value = operator_array[0](number_array[0], number_array[1]);
    display(display_value);
    number_array.shift();
    number_array.shift();
    operator_array.shift();
    number_array.push(display_value);
  }
  if (operator_array.length != 0 && number_array.length != 0) {
    check = 0;
  }
}
function add_operator() {
  number_array.push(display_value);
  operator_array.push(add);
  if (operator_array.length == 2 && number_array.length == 2) {
    display_value = operator_array[0](
      Number(number_array[0]),
      Number(number_array[1])
    );
    display(display_value);
    number_array.shift();
    number_array.shift();
    operator_array.shift();
    number_array.push(display_value);
  }
  if (operator_array.length != 0 && number_array.length != 0) {
    check = 0;
  }
}
// Equal Button
document.getElementById('equal').addEventListener('click', equalFunction);
function equalFunction() {
  number_array.push(display_value);
  if (operator_array.length == 1 && number_array.length == 2) {
    display_value = operator_array[0](
      Number(number_array[0]),
      Number(number_array[1])
    );
    display(display_value);
    number_array = [];
    operator_array = [];
  }
}
// Delete Button
document.getElementById('delete').addEventListener('click', deleteFunction);
function deleteFunction() {
  display_value.toString();
  if (typeof display_value == 'string') {
    if (display_value.length > 1) {
      display_value = display_value.substring(0, display_value.length - 1);
      Number(display_value);
    } else {
      display_value = '0';
    }
  }
  display(display_value);
}
// Clear Button
document.getElementById('clear').addEventListener('click', clearFunction);
function clearFunction() {
  display_value = '0';
  display(display_value);
  number_array = [];
  operator_array = [];
  check_2 = 0;
  check = 0;
}
//Decimal Button
document.getElementById('decimal').addEventListener('click', decimalFunction);
function decimalFunction() {
  display_value = display_value.toString();
  if (display_value.indexOf('.') == -1) {
    display_value += '.';
    display(display_value);
  }
}
