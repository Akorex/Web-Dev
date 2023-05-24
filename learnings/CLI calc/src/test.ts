import { question } from "readline-sync";


type Operator = '+' | '-' | '*' | '/'


function main() : void
{
    const firstString: string = question("Enter a number:\n")
    const operator: string = question("Enter operator:\n")
    const secondString: string = question("Enter a second number:\n")

    const validInput: boolean = isNumber(firstString) && isNumber(secondString) && isOperator(operator)
    
    if (validInput) {
        const firstNum = parseInt(firstString)
        const secondNum = parseInt(secondString)
        const result = calculate(firstNum, operator as Operator, secondNum)
        
        console.log(result)
    }

    else {
        console.log("\nYou have entered an invalid input\n")
        main()
    }
}

function isNumber(str: string): boolean
{
    const maybeNum = parseInt(str)
    const isNum: boolean = ! isNaN(maybeNum)

    return isNum
}

function isOperator(operator: string): boolean 
{
   const operators = ['+', '-', '*', '/'];
   return operators.indexOf(operator) !== -1
}

function calculate(firstNum: number, operator: Operator, secondNum: number) {
    switch(operator) {
        case '+':
            return firstNum + secondNum
        case '-':
            return firstNum - secondNum
        case '*':
            return firstNum * secondNum
        case '/': 
            return firstNum / secondNum
    }
}

main()