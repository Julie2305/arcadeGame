// Enemies our player must avoid
var Enemy = function (startX, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';

  this.speed = speed;
  this.startX = startX;
  this.x = this.startX;
  this.y = y * 83 - 18;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
  // This if statement resets the x position of the enemy to the negative 
  // start position when the sprite is 20% off the canvas widht. 
  if (this.x > ctx.canvas.width * 1.2) {
    this.x = this.startX;
  }

  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + this.speed * dt;

  if (player.y === this.y && player.x - 50 <= this.x && player.x + 50 >= this.x) {
    player.y = player.startY;
  }

  if (player.win) {
    this.sprite = 'images/Star.png';
  }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (startX, startY) {
  this.player = 'images/char-boy.png';
  this.deltaMovement = {
    x: 101,
    y: 83
  }
  this.startX = startX * this.deltaMovement.x;
  this.startY = startY * this.deltaMovement.y - 18;
  this.x = this.startX; 
  this.y = this.startY;
  this.win = false;
}

Player.prototype.update = function () {
  if (this.y === - 18) {
    this.win = true;
  }
}

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.player), this.x, this.y);
}

Player.prototype.handleInput = function (e) {
  if (e === 'up' && this.y > 0) {
    this.y = this.y - this.deltaMovement.y;
  }
  if (e === 'down' && this.y < (this.deltaMovement.y - 18) * 5) {
    this.y = this.y + this.deltaMovement.y;
  }
  if (e === 'right' && this.x < this.deltaMovement.x * 4) {
    this.x = this.x + this.deltaMovement.x;
  } 
  if (e === 'left' && this.x > 0) {
    this.x = this.x - this.deltaMovement.x;
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Player(2, 5);
const allEnemies = [
  // Enemy(startX, y, speed)
  // set a negative value for startX so the enemy starts outside of the screen.
  // y is the row that the enemy wil move over
  new Enemy(-300, 1, 300),
  new Enemy(-100, 1, 75),
  new Enemy(-150, 1, 200),
  new Enemy(-200, 1, 150),
  new Enemy(-400, 2, 100),
  new Enemy(-100, 2, 150),
  new Enemy(-100, 3, 100),
  new Enemy(-200, 3, 200),
  new Enemy(-100, 3, 90),
]


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  if (!player.win) {
    player.handleInput(allowedKeys[e.keyCode]);
  }
});