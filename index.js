alert("Basic Calculator");

function add(x, y) {
    alert("Result: "+ (x) + " + " + (y) + " = " +(x + y));
}

function subtract(x, y) {
    alert("Result: "+ (x) + " - " + (y) + " = " + (x - y));
}

function divide(x, y) {
    alert("Result: "+ (x) + " / " + (y) + " = " + (x / y));
}

function multiply(x, y) {
    alert("Result: "+ (x) + " * " + (y) + " = " + (x * y));
}

function calculate(x, y, operator) {
    if (operator == "+") {
        return add(x, y);
    }else if (operator == "-") {
        return subtract(x, y);
    }else if (operator == "/") {
        return divide(x, y);
    }else if (operator == "*") {
        return multiply(x, y);
    }else {
        alert("Please enter a valid operator!");
    }
}

let x = parseFloat(prompt("Please enter the first number: "));
let y = parseFloat(prompt("Please enter the second number: "));
let operator = prompt("Please Enter operator you want to perform: ");


calculate(x, y, operator);