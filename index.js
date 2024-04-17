#! /usr/bin/env node
import inquirer from "inquirer";
// initialize user balance and pin code
let myBalance = 500000;
let myPin = 12345;
//print welcome message
console.log("Welcome to code with AyazKhan - ATM MACHINE");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is Correct, Login Successfully!");
    //console.log('Correct Account Balance is: ${myBalance}')
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["withdraw Ammount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "withdraw Ammount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient myBalance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log('${amountAns.amount} withdraw successfully');
            console.log('Your Remaining Balance is: ${myBalance}');
        }
    }
    else if (operationAns.operation === "check Balance") {
        console.log('Your Account Balance is:${myBalance}');
    }
}
else {
    console.log("Pin is Incorrect, Try Again");
}
