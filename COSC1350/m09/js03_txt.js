/*
	Tipton Turbines
     Program to display games results in a web table
     Author: Chritian Espinoza 
     Date: 10/16/2024

     Filename: js03.js
 */


//Declaring an array through the variable declaration model.
// Name of the array = [values, values...]
let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//sunday index - 0 
//monday index 1

// An event Listener is a function in JS that waits for an event to occur then responds to it. It is a method
//The method allows to add an event listener HTML DOM object. In this case it applies to the HTML elements.

//So basically right now we're saying that when the event "load" happens we execute the function.
window.addEventListener("load", addWeekdays);

window.addEventListener("load", showGames);

//Function Declarations
function addWeekdays(){
    let i = 0; //The counter Variable

//Declares a variable by telling the program to reference all table heading elements within the html page. 
    let headingCells = document.getElementsByTagName("th");


    while (i < 7) {     //States that while the counter is equal to 0:

//States that the Heading Cells at each index will be equal to one of the days at their index.
        headingCells[i].innerHTML = weekDay[i];

//headingCells[0] = weekDays[Sunday *which is the value at the 0 index*]

        i++; //Increases the counter by one each time.
    }
}

//Declares the second function.
function showGames(){
    //Remember there are three parts. the initial condition (this being the counter), the stopping condition, and the iteration expression.

    for (let i = 0; i < gameDates.length; i++){
        let gameInfo = ""; //Declares a empty LOCAL variable.

        //The Switch statement compares the current index value with what case applies to it. 
        //IN this we are basically applyinig a different class for each case.
//ALSO - the variables are from the schedule.js file, this can be referenced as they both share the same page.
        switch (gameResults[i]){
            case "W": //For this case, it will set the p element with the class of "win". 
                gameInfo += "<p class = 'win'>";
                break;
            case "L":
                gameInfo += "<p class = 'lose'>";
                break;
            case "S":
                gameInfo += "<p class = 'suspended'>";
                break;
            case "P":
                gameInfo += "<p class = 'postponed'>"
                break;

        }

        
//Once we set the p element we check if the array value if its equal to h or a.
        if(gameLocations[i] === "h") {
            gameInfo += "vs. ";
        } else if (gameLocations[i] === "a"){
            gameInfo += "@ ";
        }
//After checking the location we then add the opponent by referencing the value in the array and adding a break. 
        gameInfo += gameOpponents[i] + "<br>";
//We then reference the value of th results, runScored, and runsAllowed arrays.
        gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";
//We then check the amount of innings in the game then add content to the gameIngo (the p element) appropriately.
        if (gameInnings[i] < 5){
            gameInfo += " [" + gameInnings[i]+"]***";
        } else if (gameInnings[i] < 9){
            gameInfo += " [" + gameInnings[i]+"]*"
        } else if (gameInfo > 9){
            gameInfo += " {" + gameInnings[i] + "]"
        }
//We then close off the element. 
        gameInfo += "</p>";
// We declare a variable that gets the id that involves gameDates of any value. 
        let tableCell = document.getElementById(gameDates[i]);
//We then use that variable to insert a piece of content in a specified area (in this case where it matches the game date
//and to enter the content of gameInfo before closing the element.
        tableCell.insertAdjacentHTML("BeforeEnd", gameInfo);
    }
}







/*
Note that all the arrays in two JavaScript files are defined 
as global variables (because they are not placed within a function or command block)
 and will be accessible to any function you create in developing this project.
*/


/*Because arrays, collections, and program loops are so often used together, J
avaScript supports several methods to work with array items directly without creating a loop.
*/
