"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstString = (0, readline_sync_1.question)("Enter a number:\n");
    var operator = (0, readline_sync_1.question)("Enter operator:\n");
    var secondString = (0, readline_sync_1.question)("Enter a second number:\n");
    var validInput = isNumber(firstString) && isNumber(secondString) && isOperator(operator);
    if (validInput) {
        var firstNum = parseInt(firstString);
        var secondNum = parseInt(secondString);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log("You have entered an invalid input");
        main();
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
function isOperator(operator) {
    var operators = ['+', '-', '*', '/'];
    return operators.indexOf(operator) !== -1;
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
main();
