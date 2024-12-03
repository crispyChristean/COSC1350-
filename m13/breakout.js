/* ..:: B R E A K O U T   G A M E ::..
 *
 * breakout.js
 * Author: Christian Espinoza 
 * Date: 11/17/2024
 * Project for COSC 1350
 * PROVIDE REASONING RATHER THAN EXPLANATION IN COMMENTS.
 */

//GLOBAL VARIABLES!!!!!!

//Get the canvas element from the DOM.
const canvas = document.getElementById("myCanvas");

//Create 2d rendering context
const ctx = canvas.getContext("2d");

//Set the xPaddle for when we call it to for event listeners.
//The reasoning provided for this is so the variable data is accessible to any functions/part of the program.
let xPaddle = 250;
const paddleWidth = 100;
//Set the variables for paddle movement, make them accessible to the whole program. 
let moveRight = false; 
let moveLeft = false;

//drawing a ball requires the x position, y position, and radius
const ballRadius = 15;
let xPos = canvas.width / 2;
let yPos = canvas.height / 2;

//xy move distance. These values are used to move the ball around.
let xMoveDist = 3, yMoveDist = 3;

//Set Variables to refer to when creating the brick objects. 
const brickHeight = 25;
const brickWidth = 90;
const brickPadding = 10;
const brickOffsetTop = 40;
const brickOffsetLeft = 5;
const brickRows = 4;
const brickColumns = 6;

//Bricks Array Is Declared here. 
const bricks = [];

//Sets a loop and starts by setting the loop to be only that of the length of the columns. This is essentially creating the basic info we need of the bricks and its quantity rather than its values.
for (let iteration = 0; iteration < brickColumns; iteration++) {
  bricks[iteration] = [];

  //Start the second loop, that instead goes over the rows. 
  for (let iteration2 = 0; iteration2 < brickRows; iteration2++) {
    //This line of code is setting three things: the x Position, the y Position, and its hit status.
    bricks[iteration][iteration2] = { x: 0, y: 0, status: 1}; // x and y are variabels that will ne used in the collisonDetection function and drawBricks function.
  }
}



//FUNCTIONS START HERE

//This function actually draws the values for bricks. It is also where we get our real values.
function drawBricks() {
  //Again, goes over the columns 
  for (let iteration = 0; iteration < brickColumns; iteration++) {

    //Sets a Loop that goes over the rows.
    for (let iteration2 = 0; iteration2 < brickRows; iteration2++) {

      //Sets a condition that chekcs if the status is one, if it is not, the brick is not drawn.
      //To help illustrate the loop and how its detecting the values of the array, imagine [1][5], 1 is the column and 5 is the row its currently on. 
      if (bricks[iteration][iteration2].status === 1) {
        //Set the x position of the array value by multiplying it with the iteration, and adding the values of the width, padding, and leftOffSet varibales we declares. 
        const brickX = iteration * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = iteration2 * (brickHeight + brickPadding) + brickOffsetTop;

        bricks[iteration][iteration2].x = brickX;
        bricks[iteration][iteration2].y = brickY;

        //Still in the loop, during the current iteration and has met the if conditions, draw the brick, if not the values of x and y remian 0 and nothing is draw.
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

//Note: b refers to the bricks array and its current value. If I am following correctly bricks is a 2-d array. 
function collisionDetection() {
  for (let iteration = 0; iteration < brickColumns; iteration++) {

    for (let iteration2 = 0; iteration2 < brickRows; iteration2++) {
      //Gets the value based on the current iteration of both loops. 
      const b = bricks[iteration][iteration2];
      //Checks if the iteration has a status of one. 
      if (b.status === 1) {
        //Checks the position of the ball with the position of the brick (in the current iteration)
        if (
          xPos > b.x &&
          xPos < b.x + brickWidth &&
          yPos > b.y &&
          yPos < b.y + brickHeight
        ) {
          //If the ball and brick meet the conditions the ball moves the other way and the status is changed to 0, thus it is not drawn and dissapears.
          yMoveDist = -yMoveDist;
          b.status = 0;
        }
      }
    }
  }
}

function paddle(){
  let canvas = document.querySelector("canvas");
  let context = canvas.getContext("2d");
  context.rect(xPaddle, 385, paddleWidth, 15);
  context.stroke();
  context.fillStyle = "#adebb3";
  context.fill();
}

//function that draws the ball on the canvas
function ballRender(){
  ctx.beginPath();
  //arc creates circular arc starting at 0, ending at 2pi (360 degrees)
  ctx.arc(xPos, yPos, ballRadius, 0, Math.PI * 2);
  //fill in the circular path with default color
  ctx.fill();
  ctx.closePath();
}

/* Function that changes variables depending if and what key is pressed. 
 * Basically, checks first if the event is the Left key, if so execute the code. 
 * If the event pressed is not the left key, check if it's the right key and go on from there.
 *
 * Basically what is going on is that when we have the event listener, it'll only execute code if its conditions are true
 * if the event conditions are true, it'll jump to the funtion where it will then check which keys are pressed. 
 * It will then decide what variables are true depending on what key is pressed. 
 *
 *  Previous Attempt MoveLeft = false;
 *  Previous attempt moveRight = true; 
 *  return moveLeft, moveRight; - No longer need a return due to global variables.
 */
function listenerFunctionDown(event){
 if(event.key === "ArrowLeft" || event.key === "Left"){
  moveLeft=true;
 }

 else if(event.key === "ArrowRight" || event.key === "Right"){
  moveRight = true;
 }
}

function listenerFunctionUp(event){

  if(event.key === "ArrowLeft" || event.key === "Left"){
    moveLeft=false;
   }
  
   else if(event.key === "ArrowRight" || event.key === "Right"){
    moveRight = false;
   }

  //moveLeft = true; Previous Attempt
  //moveRight = false; Previous Attempt 
  //return moveLeft, moveRight; No longer need a return due to global variables.
}

//Add listeners appearently do not need to return anything, it can as shown in the code below. 
document.addEventListener("keydown", listenerFunctionDown);
document.addEventListener("keyup", listenerFunctionUp);

//Where the main execution is happening. 
draw=()=>{

  //Calls every function that we've created
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ballRender();
  paddle();
  drawBricks();
  collisionDetection();

  //move the ball
  xPos += xMoveDist;
  yPos += yMoveDist;
  //console.log(xPos);
  //console.log(yPos);

  //bounce off of walls
  if(xPos > canvas.width - ballRadius){
    xMoveDist = -xMoveDist;
  }
  //20 and 350
  if(xPos < ballRadius){
    xMoveDist = -xMoveDist;
  }
  //bounce off of ceiling
  if(yPos < ballRadius){
    yMoveDist = -yMoveDist;
  }
  //bounce off of floor? 
  if(yPos + yMoveDist > canvas.height-ballRadius){
    //TODO: End Game when ball hits floor
  }

  //paddle movement
  if (moveRight == true && moveLeft == false && xPaddle != 600){
    xPaddle+=3;
  }
  if(moveRight == false && moveLeft == true && xPaddle != 0){
    xPaddle-=3;
  }

  if (xPaddle > 600 || xPaddle < 0){
    xPaddle+=0;
  }

    // Ball collision with the bottom (paddle area)
  if (yPos + yMoveDist > 385 - ballRadius) {
    
      //Checks the positions of the ball and paddle, if conditions do meet, it changes the movement. 
    if (xPos > xPaddle && xPos < xPaddle + paddleWidth) {
      yMoveDist = -yMoveDist; //Change the movement of the ball.
    } 
  }
}

/*
 * setInterval(func, delay)
 * this built-in global JavaScript function executes 'func' function every
 * 'delay' milliseconds, and returns an interval ID. We won't really use intervalID
 * so don't worry to much about that for now.
 *
 * Try playing around with the refreshRate value.
 */
const refreshRate = 30;
const intervalID = setInterval(draw, refreshRate);
