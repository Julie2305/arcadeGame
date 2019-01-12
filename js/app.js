// Enemies our player must avoid
var Enemy = function (start, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';

  // set a negative start value so the enemy starts outside of the screen
  this.speed = speed
  this.start = start
  this.x = this.start;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
  // if statement to reset the x position of the enemy to the negative 
  //start position again when he is 20% off the canvas widht. 
  if (this.x > ctx.canvas.width * 1.2) {
    this.x = this.start;
  }

  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + this.speed * dt; 
  this.y = 2 * 73;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
  this.player = 'images/char-boy.png';
}

Player.prototype.update = function (dt) {
  this.x = 2 * 101;
  this.y = 5 * 75;
}

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.player), this.x, this.y);
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [
  new Enemy (-100, 100),
  new Enemy (-200, 50),
]

const player = new Player;



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
