// Christian Espinoza Celis
// 10/10/2024
// Math Calculator program in conjunction of Calculator page. For midterm.


function main(){
    //Decalres a constant that is retrieves the value from the given inputs in the html page
    const theMealCost = document.getElementById("mealCost").value;
    const theSelectTip = document.getElementById("selectTip").value;
    // Ignorable text here, code was here to check arguments passing alert("mealCost: " + theMealCost);
    // alert("selectTip: " + theSelectTip);
    //Calls another function that passes both arguments
    calculateTip(theMealCost, theSelectTip);
}


function calculateTip(theMealCost, theSelectTip){
    //Validation, checks for if the theMealCost value is either text (string) or 0 
    //If so, it will alert the user to enter a number and will return back to the main function.
    if (theMealCost <= 0 || theMealCost == String){
        alert("Please enter a valid");
        return main;
    } else{
        //If it is an number, it will calculate the tip
        let total = theMealCost*theSelectTip;
        //Calls the id of the p element that is empty, then attaches a string that prints the variable and text.
        calcResults.innerHTML = "The tip of the meal was: " + total + "\n" + "\nThe cost of the meal was: " + theMealCost;
        return
    }
}

