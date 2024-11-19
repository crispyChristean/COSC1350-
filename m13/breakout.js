/* ..:: B R E A K O U T   G A M E ::..
 *
 * breakout.js
  Author: Christian Espinoza 
  Date: 11/17/2024
 * Project for COSC 1350
 *
 */

// get the canvas element from the DOM.
const canvas = document.getElementById("myCanvas");

/*  create a "2d rendering context".
 *  I suggest looking up and reading about the canvas.getContext function.
 *  You don't have to understand everything about canvas rendering contexts,
 *  but it help you get to know what the ctx object can and can't draw.
 */

const ctx = canvas.getContext("2d");


let xPaddle = 250;
//Remember the size of the canvas is 600 x 400
function paddle(){
  let canvas = document.querySelector("canvas");
  let context = canvas.getContext("2d");
  context.rect(xPaddle, 300, 100, 15);
  context.stroke();
  context.fillStyle = "#adebb3";
  context.fill();
}

//drawing a ball requires the x position, y position, and radius
let ballRadius = 15, xPos = canvas.width / 2, yPos = canvas.height / 2;

//xy move distance. These values are used to move the ball around.
let xMoveDist = 3, yMoveDist = 3;

//function that draws the ball on the canvas
ballRender=()=>{
  ctx.beginPath();
  //arc creates circular arc starting at 0, ending at 2pi (360 degrees)
  ctx.arc(xPos, yPos, ballRadius, 0, Math.PI * 2);
  //fill in the circular path with default color
  ctx.fill();
  ctx.closePath();
}
/*
* draw() can be thought of as our main function.
* We execute draw every few milliseconds to give our
* canvas the appearance of being animated. Notice how in the draw function
* the first thing done is ctx.clearRect(), which clears the whole canvas
* before drawing the next frame of animation.
*
* Right now, it only calls ballRender() over and over again.
* Changing the xPos and yPos will cause the ball to be drawn somewhere else
* next time the function is called.
*/

function listenerFunctionDown(){
  moveLeft = false;
  moveRight = true;
  return moveLeft, moveRight;
}

function listenerFunctionUp(){
  moveLeft = true;
  moveRight = false;
  return moveLeft, moveRight;
}


draw=()=> {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ballRender();
  paddle();
  
  //uncomment when you're ready to send the ball flying!
  xPos += xMoveDist;
  yPos += yMoveDist;
  console.log(xPos);
  console.log(yPos);

  if(xPos > canvas.width - ballRadius){
    xMoveDist = -xMoveDist;
  }
  if(yPos > 400 - ballRadius){
    yMoveDist = -yMoveDist;
  }
//20 and 350 
  if(xPos < ballRadius){
    xMoveDist = -xMoveDist;
  }
  if(yPos < ballRadius){
    yMoveDist = -yMoveDist;
  }


  document.addEventListener("keydown", listenerFunctionDown);

  document.addEventListener("keyup", listenerFunctionUp);

  if (moveRight == true && moveLeft == false){

    if (xPaddle < 25){
      xPaddle += 10;
    }
  
    else if (xPaddle > 375){
      xPaddle -= 10;
    }

    else{
      xPaddle  += xMoveDist;
    }
  }

  if (moveLeft == true && moveRight == false){
    if (xPaddle < 25){
      xPaddle += 10;
    }
  
    else if (xPaddle > 375){
      xPaddle -= 10;
    }

    else{
      xPaddle  -= xMoveDist;
    }
  }

};

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
