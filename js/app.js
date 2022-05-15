import Game from "./Game.js";

const myFirstGame = new Game();
const mySecondGame = new Game("black", "gray", 0, null, 100, 50, 5);
const mySecondGame1 = new Game("black", "gray", 0, null, 125, 60, 5);
const mySecondGame2 = new Game("black", "gray", 0, null, 140, 70, 5);

myFirstGame.start();
mySecondGame.start();

const title = document.querySelector(".title");

title.onclick = function () {
  //   myFirstGame.reset();
  //   mySecondGame.reset();
  //   mySecondGame.stop();
  mySecondGame1.start();
};
