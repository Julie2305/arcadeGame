# Classic Arcade Game Clone Project

## Table of Contents

* [About this project](#about-this-project)
* [Game rules](#game-rules)
* [Game settings](#game-settings)
* [Future featrues](#future-features)

## About this project
This classic arecade game was game is partly built by **Julie Teeuwen**. It is the thrid project of the [UDACITY FRONTEND DEVELOPERS COURS](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001). The previous projects were creating a basic portfolio and a memory game. Checkout https://github.com/Julie2305/portfolio to see her full portfolio.

A stater code was provided by the udacity course. The goal was to create enemy's intances and a player instance within the app.js. The following specifications should be built in:
- Player can not move off screen
- Vehicles cross the screen
- Vehicle-player collisions happen logically (not to early or too late)
- Vehicle-player collision resets the game
- Something happens when player wins

## Game rules
Move the player around with the arrow keys. Try to get your player to the water side. Avoid the bug's, they are your enemy's!

## Game settings
- Adjust the enemy's within the allEnemy's array. ```Enemy(startX, y, speed) ```. Realistic values to set here are:
-- startX: between -100 and -500
-- y: 1, 2 or 3 (the rows of the stones)
-- speed: between 50 and 400
- Adjust the player within Player.player

## Future features
- Create the Enemy attributes randomly, so the game will be differtent every time
- Make the amount of Enemy's easier to config
- Keep track of amount of movements / time to generate a score
- Create a retry button
- Pick a player
- Create different levels (differnt amount of enemy's) 