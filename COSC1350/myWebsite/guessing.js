//JavaScript does not require us to use a reference variable to use the Math Object.

//Remember Objects can contain multiple types of data that includes variables, functions, and other pieces of data.

//Math.Random method returns a float between 0-1
//Math.floor() then generates a random number between 0-100 without a decimal.
let theRandomNumber = Math.floor(Math.random() * 101);
console.log(theRandomNumber)
let totalTries = 0;

var allGuesses = [];

function main(){
    let theGivenInt = document.getElementById("theGuess").value; //Gets the Value of the entered Number.

//Checks to see if it's greater than 100, if so it will alert the user and then return from main. 
    if(theGivenInt > 100){
        alert("Value is too high within the generated number, please re-enter");
        return;
    }
//Checks to see if it's a negative, if so it then opens a mini window to let the user know the value must be positive.
    else if (theGivenInt < 0){ 
        alert("The Value must be Positive! Please RE-Enter :(");
        return;
    }else{ //If it passes these two checks, then:
        //It will then check for the amount of triest, if it does not exceed the limit then it will execute the code within.
        if (totalTries != 10){
            //Checks if the user input is the same as the random number, if so, it will then correct the user and break out of the program.
            if (theGivenInt == theRandomNumber){
                checkIfRight.innerHTML = "Congratulations! You guessed the Number Correctly!!!";
                return;
            }
            //If not, it will then tell the user they're wrong while decreasing their "lives" and 
            else{
                allGuesses.push(theGivenInt);
                if(theGivenInt > theRandomNumber){
                    checkIfRight.innerHTML = "Sorry! You're input was not the right number, it was too high, try again";
                }
                else{
                    checkIfRight.innerHTML = "Sorry! You're input was not the right number, it was too low! try again!";
                }
                lastGuesses.innerHTML = "Your Previous Guesses: " + allGuesses;
                console.log(theGivenInt);
                console.log(allGuesses);
                console.log(totalTries);
                totalTries++;
            }
        }else{
            checkIfRight.innerHTML = "Sorry you exceeded your tries! You lose!";
            return;
        }
    }
}


function restart(){
    totalTries = 0;
    allGuesses = [];
    checkIfRight.innerHTML = "";
    newForm = document.getElementById("guessingForm");
    newForm.reset();
    return;
}
