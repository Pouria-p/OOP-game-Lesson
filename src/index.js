class Player {
  constructor() {
    this.positionX = 20;
    this.positionY = 50;
    this.width = 20;
    this.height = 20;
    this.domElement;
    this.createDomElem(); //invoke to create the element
  }
  createDomElem() {
    //Create DOM element
    this.domElement = document.createElement("div");
    this.domElement.setAttribute("id", "player");
    const boardElement = document.querySelector("#board");
    boardElement.appendChild(this.domElement);
    //add css styling with DOM
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    //add position styling with DOM
    this.domElement.style.bottom = this.positionY + "vw";
    this.domElement.style.left = this.positionX + "vh";
  }
  moveLeft() {
    this.positionX = this.positionX - 10;
    this.domElement.style.left = this.positionX + "vw";
  }
  moveRight() {
    this.positionX += 10;
    this.domElement.style.left = this.positionX + "vh";
  }
}

class Obstacle {
  constructor() {
    this.positionX = 50;
    this.positionY = 100;
    this.width = 20;
    this.height = 20;

    this.domElement;
    this.createObstacleElem();
  }
  createObstacleElem() {
    this.domElement = document.createElement("div");
    this.domElement.setAttribute("class", "obstacle");
    const boardElement = document.querySelector("#board");
    boardElement.appendChild(this.domElement);
    //add css styling with DOM
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    //add position styling with DOM
    this.domElement.style.bottom = this.positionY + "vw";
    this.domElement.style.left = this.positionX + "vh";
  }
  moveDown() {
    this.positionY -= 10;
    this.domElement.style.bottom = this.positionY + "vh";
  }
}

const player = new Player();
const obstacle = new Obstacle();
setInterval(() => {
  obstacle.moveDown();
}, 5 * 1000);
window.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft") {
    player.moveLeft();
  } else if (e.code === "ArrowRight") {
    player.moveRight();
  }
});
