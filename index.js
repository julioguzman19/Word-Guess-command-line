//npm init -y — this will initialize a package.json file for your project. The package.json file is required for installing third party npm packages and saving their version numbers
// dependency for inquirer npm package
let inquirer = require("inquirer");

/* let Letter = require("./Letter"); */
let Word = require("./Word")

let turns = 4;
let wins = 0;
let losses = 0;
let word = "dog";

function askUser() {
    if (turns > 0) {
        inquirer.prompt([
            {
                name: "guessedCharacter",
                message: "Guess a Letter"
            }
        ]).then(function (answers) {
            let guess = answers.guessedCharacter;
            console.log("dfd")
            word.checkGuess(guess);

            if(word.toLowerCase().indexOf(guess.toLowerCase()) === -1){
                turns--;
                console.log("turns reduced checking word characters vs guess logic in index.js")
            }
            else{
                console.log("correct guess! askUser function in index.js")
            }


        })
    }
        
}

askUser();