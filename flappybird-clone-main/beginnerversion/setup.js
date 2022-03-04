 //game variables
 const gameOverSound = new Audio("../assets/sounds/gameover.mp3");
 const music = new Audio("../assets/sounds/music.mp3");
       music.loop = true;
       music.volume = 0.1;
 const debugModeIsOn = false;
 const startKey = "s";
 const restartKey = "r";
 const hitboxColor = "#00FF02";
 const destructionXPosition = -1000;
 const spawnXPosition = canvas.width * 1.2
 let gameState = "menu"; // menu, action or gameover
 
 // back image
 const backImage=new Image(1920,1200)
       backImage.src = "../assets/images/bg.png";
 
 // bird variables
 const birdImage = new Image(100, 100);
       birdImage.src = "../assets/images/pidgey.png";
 const birdStartYPosition = 250;
 const birdStartYSpeed = 0;
 const birdStartYAccelleration = 0;
 const birdBeginningYAccelleration = 0.7;
 const birdXPosition = 250;
 const birdHitboxRadius = 30;
 const birdFlapSound = new Audio("../assets/sounds/flap.wav");
 const birdFlapForce = -12;
 const birdFlapKey = " ";
 let birdYSpeed = birdStartYSpeed;
 let birdYAccelleration = birdStartYAccelleration;
 let birdYPosition = birdStartYPosition;
 let birdCanFlap = false;
 
 
 // score variables
 const scoreImage = new Image(90, 90);
       scoreImage.src = "../assets/images/score.png";
 const scoreImageXPosition = 70;
 const scoreImageYPosition = 70;
 const scoreTextXPosition = 100;
 const scoreTextYPosition = 90;
 const scoreTextSize = 50;
 const scoreTextColor = "yellow";
 let scoreValue = 0;
 
 // cloud variables
 const cloudImage = new Image(200, 200);
       cloudImage.src = "../assets/images/cloud_test.png";
 const cloudSpawnInterval = 10000; // milliseconds
 const cloudXSpeed = -.7;
 let cloudTimeSinceLastSpawn = 0; // milliseconds
 let clouds = [
     {
         xPosition: canvas.width,
         yPosition: randomBetween(0, canvas.height/2), 
     },
     {
         xPosition: canvas.width -500,
         yPosition: randomBetween(0, canvas.height/2), 
     },
     {
         xPosition: canvas.width-1000,
         yPosition: randomBetween(0, canvas.height/2), 
     },
 ];
 
 // fireball variables
 const fireballImage = new Image(220, 220);
       fireballImage.src = "../assets/images/electrode_test.png";
 const fireballXSpeed = -5.5;
 const fireballHitboxRadius = 100;
 const fireballSpawnInterval = 2000;
 let fireballTimeSinceLastSpawn = fireballSpawnInterval;
 let fireballs = [];
 
 // coin variables
 const coinSound = new Audio("../assets/sounds/coin.wav");
 const coinImage = new Image(90, 90);
       coinImage.src = "../assets/images/nanab-berry.png"
 const coinHitboxRadius = 30;
 const coinXSpeed = -5;
 const coinSpawnInterval = 1000;
 const coinValue = 1;
 let coinTimeSinceLastSpawn = coinSpawnInterval
 let coins = [];
 
 // diamond variables i setup.js
 const diamondSound = coinSound;
 const diamondImage = new Image(90, 90);
       diamondImage.src = "../assets/images/golden.png";
 const diamondHitboxRadius = 30;
 const diamondXSpeed = -10;
 const diamondSpawnInterval = 1000;
 const diamondValue = 5;
 let diamondXPosition = spawnXPosition;
 let diamondYPosition = randomBetween(0, canvas.height);
 let diamondTimeSinceLastSpawn = diamondSpawnInterval
 let diamonds = [];
 
 // bad variables (setup.js)
 const badSound = new Audio("../assets/sounds/coin.wav");
 const badImage = new Image(90, 90);
       badImage.src = "../assets/images/bad.png"
 const badHitboxRadius = 30;
 const badXSpeed = -7.5;
 const badSpawnInterval = 500;
 const badValue = -10;
 let badXPosition = spawnXPosition;
 let badYPosition = randomBetween(0, canvas.height);
 let badTimeSinceLastSpawn = badSpawnInterval
 let bads = [];
 
 // menu text variables
 const menuFirstText = "Press " + startKey + " to start";
 const menuTextXPosition = 300;
 const menuTextYPosition = 400; 
 const menuSecondText = "Press space to flap wings";
 const menuTextSize = 60;
 const menuTextColor = "yellow";
 const gameOverText = "Press " + restartKey + " to restart";