export default class Game {
  gameBox;
  player1;
  player2;
  ball1;
  ball2;
  timerId;
  refreshRate;

  constructor(
    ball1Color = "red",
    Ball2Color = "lightgreen",
    ball1X = 0,
    ball2X = 0,
    ball1Y = 175,
    ball2Y = 200,
    refreshRate = 10
  ) {
    this.gameBox = document.querySelector("#game-box");
    this.ball1 = this.createNewBall(ball1Color, ball1X, ball1Y);
    this.ball2 = this.createNewBall(Ball2Color, ball2X, ball2Y);

    this.gameBox.appendChild(this.ball1);
    this.gameBox.appendChild(this.ball2);

    this.refreshRate = refreshRate;
  }

  start() {
    this.player1 = 0;
    this.player2 = 0;

    this.ball1.style.left = this.player1 + "px";
    this.ball2.style.left = this.player2 + "px";

    this.timerId = setInterval(() => {
      this.player1 = this.generateRandomNumber(0.1, 1);
      this.player2 = this.generateRandomNumber(0.1, 1);

      this.ball1.style.left =
        +this.ball1.style.left.split("px")[0] + this.player1 + "px";
      this.ball2.style.left =
        +this.ball2.style.left.split("px")[0] + this.player2 + "px";

      this.checkGameEnd();
    }, this.refreshRate);
  }

  stop() {
    clearInterval(this.timerId);
  }

  reset() {
    this.ball1.style.left = 0 + "px";
    this.ball2.style.left = 0 + "px";
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  checkGameEnd() {
    if (
      +this.ball2.style.left.split("px")[0] + 10 >= this.gameBox.offsetWidth ||
      +this.ball1.style.left.split("px")[0] + 10 >= this.gameBox.offsetWidth
    ) {
      //! Once one of the balls reaches the value of the width of the gameBox container, then the game will end,
      //! and the game's timer will be stopped:
      console.log("Winner was determined");
      clearInterval(this.timerId);
    }
  }

  createNewBall(color, x, y) {
    // const ballTemplate = document.querySelector("#ball");
    // //! Cloning the actual html element from the template content:
    // const ball = ballTemplate.content.cloneNode(true).firstElementChild;

    const ball = document.createElement("div");
    ball.className = "ball";

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

  generateRandomNumber(min, max) {
    return Math.random() * max + min;
  }
}
