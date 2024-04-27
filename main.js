import inquirer from "inquirer";
import chalk from "chalk";
let Mybalance = 10000;
let myPin = 123;
console.log(chalk.blue("\t\t\t<<<=======================================>>>\t\n  \t <<<==========>>>  Welcome to 'Code With Kashaf' - ATM Machine  <<<================>>> \n \t\t\t<<<=======================================>>> \t"));
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        type: "number",
        message: chalk.yellowBright("Enter Your Pin Code :"),
    }
]);
if (pinAnswer.Pin === myPin) {
    console.log(chalk.greenBright("\n \t Your Pin Is Correct , Login Successfully\n"));
    console.log(chalk.bgYellowBright.bold(`Current Account Balance is ${Mybalance}`));
    let operationAns = await inquirer.prompt([
        {
            name: "Operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount", "Check Amount"],
        }
    ]);
    if (operationAns.Operation === "Withdraw Amount") {
        let WithdrawAns = await inquirer.prompt([
            {
                name: "WithdrawMethod",
                type: "list",
                message: " Select a Withdraw Method:",
                choices: ["Fast Cash", "Enter Amount"],
            }
        ]);
        if (WithdrawAns.WithdrawMethod === "Fast Cash") {
            let FastcashAns = await inquirer.prompt([
                {
                    name: "FastCash",
                    type: "list",
                    message: " Select Amount:",
                    choices: ["1000", "2000", "5000", "8000", "10000"],
                }
            ]);
            if (FastcashAns.FastCash > Mybalance) {
                console.log(chalk.bgRedBright("Insuficient Balance"));
            }
            else {
                Mybalance -= FastcashAns.FastCash;
                console.log(`${FastcashAns.FastCash}Withdraw Successfully`);
                console.log(chalk.redBright(`Your Remaining Balance is ${chalk.greenBright(Mybalance)}`));
            }
        }
        else if (WithdrawAns.WithdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "Amount",
                    type: "number",
                    message: "Enter the amount to withdraw:",
                }
            ]);
            if (amountAns.Amount > Mybalance) {
                console.log(chalk.bgRedBright("\n\t insufficient Balance \n"));
            }
            else {
                Mybalance -= amountAns.amount;
                console.log(`${amountAns.Amount} Withdraw Successfully`);
                console.log(` Your Remaining Balance is : ${Mybalance}`);
            }
        }
    }
    else if (operationAns.Operation === "Check Amount") {
        console.log(chalk.greenBright(`\n \tYour Balance Amount is : ${Mybalance}\n`));
    }
}
else {
    console.log(chalk.bgRedBright.bold(" Sorry! Your Pin is Incorrect, Try Again"));
}
