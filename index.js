//npm init -y — this will initialize a package.json file for your project. The package.json file is required for installing third party npm packages and saving their version numbers
// dependency for inquirer npm package
let Letter = require("./Letter");
let inquirer = require("inquirer");

let askUser = function () {
    inquirer.prompt([
        {
            name: "guessedCharacter",
            message: "Guess a Letter"
        }
    ]).then(function (answers) {
        let newLetter = new Letter(answers.guessedCharacter);
        newLetter.guessed();
        console.log(turns);
        askUser();
    })
}
askUser();
