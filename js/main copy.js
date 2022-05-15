const gameBox = document.querySelector("#game-box");
const ballTemplate = document.querySelector("#ball");

// @ts-ignore
const ballDiv = ballTemplate.content.cloneNode(true).firstElementChild;
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

function createNewBall(templateOfTheBall, color, x, y) {
  const ball = templateOfTheBall.content.cloneNode(true).firstElementChild;
  ball.style.backgroundColor = color || "yellow";
  ball.style.height = "10px";
  ball.style.width = "10px";
  ball.style.borderRadius = "50%";
  ball.style.position = "absolute";
  ball.style.left = (x || "200") + "px";
  ball.style.top = (y || "200") + "px";

  return ball;
}

const ball1 = createNewBall(ballTemplate, null, 0, 175);
const ball2 = createNewBall(ballTemplate, "red", 0, 200);
const ball3 = createNewBall(ballTemplate, "lightgreen", 50, 50);
gameBox.append(ball1);
gameBox.append(ball2);
gameBox.append(ball3);

let player1 = 0;
let player2 = 0;

ball1.style.left = 0 + "px";
ball2.style.left = 0 + "px";

const id = setInterval(() => {
  player1 = generateRandomNumber(0.1, 1);
  player2 = generateRandomNumber(0.1, 1);

  ball1.style.left = +ball1.style.left.split("px")[0] + player1 + "px";

  ball2.style.left = +ball2.style.left.split("px")[0] + player2 + "px";

  if (
    +ball2.style.left.split("px")[0] + 10 >= gameBox.offsetWidth ||
    +ball1.style.left.split("px")[0] + 10 >= gameBox.offsetWidth
  ) {
    console.log("Winner was determined");
    clearInterval(id);
  }
}, 10);

function generateRandomNumber(min, max) {
  return Math.random() * max + min;
}
