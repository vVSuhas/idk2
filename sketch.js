var player;
var bulletGroup1,bulletGroup2,shipGroup1,shipGroup2,shipGroup3,shipGroup4;
var bg,bgImg,player_running,shipImg,bulletImg,planeImg;
var bgSound;
var shoot1,shoot2;
var score;
var gameState=0;
var lives=3,life1,life2,life3,lifeImg;

function preload(){
  player_running = loadAnimation("player.png","player2.png","player3.png","player4.png");
  bulletImg=loadImage('bullet.png');
  shipImg=loadImage('ship.png');
  bgImg=loadImage('space.jpg')
  planeImg=loadImage('spaceship.png');
  bgSound=loadSound("audio.mp3");
  shoot1=loadSound("shoot1.mp3");
  shoot2=loadSound("shoot2.mp3");
  lifeImg=loadImage("life.png")
}

function setup(){
  createCanvas(1000, 525);
  player=createSprite(50,213);
  player.addAnimation("running", player_running);
  player.scale=0.1;

  bulletGroup1 = new Group();
  bulletGroup2 = new Group();
  shipGroup1 = new Group();
  shipGroup2 = new Group();
  shipGroup3 = new Group();
  shipGroup4 = new Group();

  life1 = createSprite(600,50);
  life1.addImage(lifeImg);
  life1.scale=0.3;

  life2 = createSprite(670,50);
  life2.addImage(lifeImg);
  life2.scale=0.3;

  life3 = createSprite(740,50);
  life3.addImage(lifeImg);
  life3.scale=0.3;

  score=0;
}

function draw(){
  
  background(bgImg);
  //bgSound.play();

 noStroke();
  fill("White")
  textSize(20)
  text("Score:" +score,50,50)

  if(gameState === 0){
    if(keyDown("UP_ARROW")){
      player.y=player.y-10;
    }
  
    else if(keyDown("DOWN_ARROW")){
      player.y=player.y+10;
    }
  
    if (keyDown("space")) {
      spawnBullet1();
      spawnBullet2();
      shoot1.play();
     }
     
    if(bulletGroup1.isTouching(shipGroup1)) {
      shipGroup1.destroyEach();
      bulletGroup1.destroyEach();
      bulletGroup2.destroyEach();
      score=score+3;
    }
  
    if(bulletGroup1.isTouching(shipGroup2)){
      shipGroup2.destroyEach();
      bulletGroup1.destroyEach();
      bulletGroup2.destroyEach();
      score=score+2;
      }
      
    if(bulletGroup1.isTouching(shipGroup3)) {
        shipGroup3.destroyEach();
        bulletGroup1.destroyEach();
        bulletGroup2.destroyEach();
        score=score+1;
    }
    
    if(bulletGroup1.isTouching(shipGroup4)){
        shipGroup4.destroyEach();
        bulletGroup1.destroyEach();
        bulletGroup2.destroyEach();
        score=score+2;
  }
    spawnShip1();
    spawnShip2();
    spawnShip3();
    spawnShip4();
}

   else if(gameState === 1){
    noStroke();
    fill("RED");
    textSize(40);
    text("GAME OVER",500,500);
    player.velocity=0;
    shipGroup1.setVelocityXEach(0);
    shipGroup1.setLiftimeEach(-1);
    
    shipGroup2.setVelocityXEach(0);
    shipGroup2.setLiftimeEach(-1);
    
    shipGroup3.setVelocityXEach(0);
    shipGroup3.setLiftimeEach(-1);
    
    shipGroup4.setVelocityXEach(0);
    shipGroup4.setLiftimeEach(-1);
  }
  drawSprites();
}


function spawnShip1(){
  if (World.frameCount % 120 === 0) {
  var ship1=createSprite(950,Math.round(random(1, 1000)), 900, 900);
  ship1.addImage(shipImg);
  ship1.scale=0.3;
  ship1.velocityX = -15;
  ship1.lifetime=330
  shipGroup1.add(ship1);
}
}

function spawnShip2(){
  if (World.frameCount % 150 === 0) {
  var ship2=createSprite(950,Math.round(random(400,250)), 900, 900);
  ship2.addImage(shipImg);
  ship2.scale=0.3;
  ship2.velocityX = -10;
  ship2.lifetime=330
  shipGroup2.add(ship2);
}
}

function spawnShip3(){
  if (World.frameCount % 150 === 0) {
  var ship3=createSprite(950,Math.round(random(50,500)), 900, 900);
  ship3.addImage(shipImg);
  ship3.scale=0.3;
  ship3.velocityX = -6
  ship3.lifetime=330
  shipGroup3.add(ship3);
}
}

function spawnShip4(){
  if (World.frameCount % 100 === 0) {
  var ship4=createSprite(950,Math.round(random(100,500)), 900, 900);
  ship4.addImage(shipImg);
  ship4.scale=0.3;
  ship4.velocityX = -10
  ship4.lifetime=330
  shipGroup4.add(ship4);
}
}

function spawnBullet1(){
  var bullet1=createSprite(18,220);
  bullet1.addImage(bulletImg);
  bullet1.scale=0.4;
  bullet1.depth=0.1
  bullet1.x = player.x ;
  bullet1.y = player.y - -5;
  bullet1.velocityX= bullet1.velocityX+10;
  bullet1.lifetime=100
  bulletGroup1.add(bullet1);
}

function spawnBullet2(){
  var bullet2=createSprite(18,220);
  bullet2.addImage(bulletImg);
  bullet2.scale=0.4;
  bullet2.depth=0.1
  bullet2.x = player.x ;
  bullet2.y = player.y - -45;
  bullet2.velocityX= 10;
  bullet2.lifetime=100
  bulletGroup2.add(bullet2);
}