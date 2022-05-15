//! Referencing the gameBox div from the HTML document:
const gameBox = document.querySelector("#game-box");

//! Referencing the ball Template from the HTML document:
const ballTemplate = document.querySelector("#ball");

// @ts-ignore
// const ballDiv = ballTemplate.content.cloneNode(true).firstElementChild;
// const ball2 = ballDiv.cloneNode(true);
// gameBox.appendChild(ballDiv);
// gameBox.appendChild(ball2);

// ball2.style.backgroundColor = "red";
// ball2.style.height = "10px";
// ball2.style.width = "10px";
// ball2.style.borderRadius = "50%";
// ball2.style.position = "absolute";
// ball2.style.left = "100px";
// ball2.style.top = "100px";

// ballDiv.style.backgroundColor = "yellow";
// ballDiv.style.height = "10px";
// ballDiv.style.width = "10px";
// ballDiv.style.borderRadius = "50%";
// ballDiv.style.position = "absolute";
// ballDiv.style.left = "200px";
// ballDiv.style.top = "200px";

// console.dir(ballDiv);

//! Function to clone the ball div from the Ball Template in the html, then style it and return it to be used:
function createNewBall(templateOfTheBall, color, x, y) {
  //! Cloning the actual html element from the template content:
  const ball = templateOfTheBall.content.cloneNode(true).firstElementChild;

  //! Setting the styling for the ball that was cloned:
  ball.style.backgroundColor = color || "yellow";
  ball.style.height = "10px";
  ball.style.width = "10px";
  ball.style.borderRadius = "50%";
  ball.style.position = "absolute";
  ball.style.left = (x || "200") + "px";
  ball.style.top = (y || "200") + "px";

  //! Passing back the ball that was cloned and styled back to the user where he called this function:
  return ball;
}

//! Using the createNewBall function to create multiple copies of the ball div object from the template that we are passing,
//! and with the stylings/properties/parameters that we are passing to the funciton:
const ball1 = createNewBall(ballTemplate, null, 0, 175);
const ball2 = createNewBall(ballTemplate, "red", 0, 200);
const ball3 = createNewBall(ballTemplate, "lightgreen", 50, 50);

//! Appending the balls to the gameBox div that we are referencing in the constant called (gameBox):
gameBox.append(ball1);
gameBox.append(ball2);
gameBox.append(ball3);

//! =====================
//! The Racing game logic:
//! =====================

//! Initializing the x position for each ball that reprecents a player in the game to the value of 0:
let player1 = 0;
let player2 = 0;

//! Setting the value of the initial position of the balls to the values of the variables player1 and player2:
ball1.style.left = player1 + "px";
ball2.style.left = player2 + "px";

//! Starting the game's timer to move the balls by an offset of a random value that is generated for each player:
const id = setInterval(() => {
  //! Generating a random value for the ball's x position for each player:
  player1 = generateRandomNumber(0.1, 1);
  player2 = generateRandomNumber(0.1, 1);

  //! Applying the generated value to the ball1:
  ball1.style.left = +ball1.style.left.split("px")[0] + player1 + "px";

  //! Applying the generated value to the ball1:
  ball2.style.left = +ball2.style.left.split("px")[0] + player2 + "px";

  //! Game End Logic: Checking with each iteration, whether or not one of the balls has reached the width of the gameBox container:
  if (
    +ball2.style.left.split("px")[0] + 10 >= gameBox.offsetWidth ||
    +ball1.style.left.split("px")[0] + 10 >= gameBox.offsetWidth
  ) {
    //! Once one of the balls reaches the value of the width of the gameBox container, then the game will end,
    //! and the game's timer will be stopped:
    console.log("Winner was determined");
    clearInterval(id);
  }
}, 10);

//! A function that generates a random float value  between the min and max values passed in its parameters:
function generateRandomNumber(min, max) {
  return Math.random() * max + min;
}
