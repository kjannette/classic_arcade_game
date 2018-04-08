
// Code defines game variables:

const POSSIBLE_Y_VALUES = [60, 145, 230, 315]
let gameScore = 0;
let lifeCount = 5;
let scoreBoard = document.querySelector(".score");
let lifeBoard= document.querySelector(".lives");

// Function creates the enemies that player must avoid

var Enemy = function(x, y, speed) {

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Function updates the enemy's position

Enemy.prototype.update = function(dt) {

    this.x = this.x + this.speed * dt;

    if (this.x >= 400) {
      this.x = 0;
      this.y = POSSIBLE_Y_VALUES[Math.floor(Math.random() * POSSIBLE_Y_VALUES.length)];
    }
    if (this.x >= player.x -30 && this.x <= player.x + 30) {
      if (this.y >= player.y -50 && this.y <= player.y +50){
         lifeCount -= 1;
         lifeBoard.innerText = ` Lives: ${lifeCount}`
         if (lifeCount === 0) {
           console.log("RESET")
         }
         player.x = 200;
         player.y = 400;
      }
    }
};

// Function renders the enemy characters on the screen

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Function creates the player class

var Player = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png'
};

/* Function checks if player has made it to the "water" area, thus scoring
a point */

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.y < 0){
    gameScore += 1;
    scoreBoard.innerText = `Score: ${gameScore}`
    this.x= 200;
    this.y = 400;
  }
};

// Function renders the player characters on the screen

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Function moves the player character on the screen in response to user input

Player.prototype.handleInput = function(e) {
    switch (e) {
      case 'left':
        if (this.x<= 0) {

        } else {
          this.x = this.x - 100;
        }
        break;
      case 'down':
        if (this.y >= 400) {

        } else {
          this.y = this.y + 85;
        }
        break;
      case 'right':
        if (this.x >= 400) {

        } else {
          this.x = this.x + 100;
        }
        break;
      case 'up':
        if (this.y <= -25) {

        } else {
          this.y = this.y - 85;
        }
        break;
      default:
      alert("Use right, left, up and down keys to move your player!");
    }
};

// Code below instantiates game objects: player and "enemies"

var enemyOne = new Enemy(0, 230, 60);
var enemyTwo = new Enemy(0, 60, 80);
var enemyThree = new Enemy(0, 145, 110);
var enemyFour = new Enemy(0, 145, 40);

var allEnemies = [enemyOne, enemyTwo, enemyThree, enemyFour];

var player = new Player(200, 400);

/* Function listens for key presses and sends the keys to
Player.handleInput() method. */

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
