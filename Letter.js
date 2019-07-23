//npm init -y — this will initialize a package.json file for your project. The package.json file is required for installing third party npm packages and saving their version numbers
// dependency for inquirer npm package
let inquirer = require("inquirer");
let Letter = function(underlyingCharacter,guessedLetterBoolean){
    this.underlyingCharacter = underlyingCharacter;
    this.guessedLetterBoolean = guessedLetterBoolean;
    //returns the underlying character if the letter 
    //has been guessed, or a placeholder (like an underscore) if the 
    //letter has not been guessed
    this.guessed = function(){
        if(this.guessedLetterBoolean === true){
            //return character if guessed
        }
        else{
            //return placeholder like underscore if letter
            //not guessed
        }
    }
    //takes a character as an argument and checks it against the 
    //underlying character, updating the stored boolean value to 
    //true if it was guessed correctly
    this.characterCheckUnderlyingCharacter = function (underlyingCharacter){
        
    }
}

let askForLetter = function(){
    inquirer.prompt([
        {
        name: "underlyingCharacter",
        message: "Guess a Letter"
        }
    ]).then(function(answers){
        let newLetter = new Letter(
            answers.underlyingCharacter
        )
    })
  
}