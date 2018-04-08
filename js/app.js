const POSSIBLE_Y_VALUES = [60, 145, 230, 315]
let gameScore = 0;
let lifeCount = 5;
let scoreBoard = document.querySelector(".score");
let lifeBoard= document.querySelector(".lives");

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;

    if (this.x >= 400) {
      this.x = 0;
      this.y = POSSIBLE_Y_VALUES[Math.floor(Math.random() * POSSIBLE_Y_VALUES.length)];
    }
    if (this.x >= player.x -30 && this.x <= player.x + 30) {
      if (this.y >= player.y -50 && this.y <= player.y +50){
         console.log('Collision');
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

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png'
};

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

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
    if (this.y < 0){
    gameScore += 1;
    scoreBoard.innerText = `Score: ${gameScore}`
    this.x= 200;
    this.y = 400;
  }
//  console.log("X:" + this.x + " Y:" + this.y)
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

var enemyOne = new Enemy(0, 230, 60);
var enemyTwo = new Enemy(0, 60, 80);
var enemyThree = new Enemy(0, 145, 110);
var enemyFour = new Enemy(0, 145, 40);

var allEnemies = [enemyOne, enemyTwo, enemyThree, enemyFour];



// Place the player object in a variable called player

var player = new Player(200, 400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
//    console.log("KEY: " + allowedKeys[e.keyCode])
    player.handleInput(allowedKeys[e.keyCode]);
});
