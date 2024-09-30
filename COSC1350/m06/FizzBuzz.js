/* 
Name: Christian Espinoza
Date: 09/29/2024
Assingment: FizzBuzz Module 6
FileName: FizzBuzz.js

Instructions:

Write a program that uses console.log to print all the numbers from 1 to 100, - use a for loop

with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, - use a switch statement

and for numbers divisible by 5 (and not 3),  - switch

print "Buzz" instead. Name the file fizzBuzz,js,  - Switch 

include a multi-line comment with your name, filename, and date, and be sure to run your code. 

*/
let number = 0;
//Declares the number variable.

//Starts the While Loop, states that as long as the variable number does not equal 100, continue the loop.
while (number != 100){
    //While in the loop...
    //Add 1 to the number Variable.
    number += 1;
    //Print the number variable value 

    //Enter a switch statement. Which operates similar to a if-else statement, but compares each case and 
    //If matches to the expression executes the following code.

    //The expression 0 will be used to match it to the proper case.
    switch (0){
        /*First Case checks if it is divisble by 3, hence the remainder, as if it is divible by 3 it will
        match the expression and execute the following code (print that it's a fizz and break out of switch) */

        case (number % 3): //This is all achieved by using the number variable (which changes in every loop)
            console.log("Fizz");
            break;
        case (number % 5): //Similar to the first case but checking for remainder of 5
            console.log("Buzz");
            break;
        default: //Will default to this if the expression does not match any of the following cases. 
            console.log(number)
            break;
    }
}