console.clear();
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first numer", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    { message: "select one of the operators", type: "list",
        name: "operator",
        choices: ["addition",
            "substraction", "divion", "multiplication"],
    },
]);
// conditional statement
if (answer.operator === "addition") {
    console.log("your value is:", answer.firstNumber
        + answer.secondNumber);
}
else if (answer.operator === "substraction") {
    console.log("your value is:", answer.firstNumber
        - answer.secondNumber);
}
else if (answer.operator === "divion") {
    console.log("your value is:", answer.firstNumber
        / answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log("your value is:", answer.firstNumber
        * answer.secondNumber);
}
else {
    console.log("please select valid value");
}
console.log("zubair khan ");
