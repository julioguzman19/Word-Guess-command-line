//npm init -y — this will initialize a package.json file for your project. The package.json file is required for installing third party npm packages and saving their version numbers
// dependency for inquirer npm package
let inquirer = require("inquirer");

let word = "candy";
let len = word.length;
let empty = "_____"

inquirer.prompt([
    {
    name: "underlyingCharacter",
    message: "Guess a Letter"
    }
]).then(function(answers){
    let guessedLetterBoolean = true;
    let newLetter = new Letter(answers.underlyingCharacter,guessedLetterBoolean);
    newLetter.guessed();

})

let Letter = function(underlyingCharacter,guessedLetterBoolean){
    this.underlyingCharacter = underlyingCharacter;
    this.guessedLetterBoolean = guessedLetterBoolean;
    //returns the underlying character if the letter 
    //has been guessed, or a placeholder (like an underscore) if the 
    //letter has not been guessed
    this.guessed = function (underlyingCharacter) {
        if (this.guessedLetterBoolean === true) {
            for (let i = 0; i < len; i++) {
                if (underlyingCharacter === word.charAt(i)) {
                    empty.charAt(i) = underlyingCharacter;
                }

            }
            console.log(empty);
        }
        //return character if guessed
    }

}
    //takes a character as an argument and checks it against the 
    //underlying character, updating the stored boolean value to 
    //true if it was guessed correctly
    this.characterCheckUnderlyingCharacter = function (underlyingCharacter){
        
    }




  

