var PLAY=1,END=0,gamestate=PLAY;

var monk , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodgroup, obstaclegroup
var score=0;
var ground;
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
 
  monk=createSprite(150,580,30,50);
  monk.addAnimation("monkey",monkey_running);
  monk.scale=0.1;
 // monkey.velocityY=0;
//console.log(monk.y);
    

  
  
 // ground=createSprite(400,585,1200,30);
 ground=createSprite(400,height-15,1200,30);
 // ground.shapeColor("#2D6A4F");
  
  foodgroup=new Group();
  obstaclegroup=new Group();
  
}


function draw() {
  
  background("#2D6A4F");
  textSize(20);
  fill("#EF476F");
  text("SCORE: "+score,width/2,50);
  
  survivaltime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivaltime,100,50);
    
    ground.velocityX=-3;
  
  if(ground.x<0){
      ground.x=ground.width/2;
    }
    
 
    if(keyDown("space") ){
      monk.velocityY = -18;
     // console.log(monkey.velocityY);
    }
    monk.velocityY = monk.velocityY + 0.8;
  
       
    
   if(foodgroup.isTouching(monk)){
      score=score+2;  
      foodgroup.destroyEach();
    }
    
  
    
   
    
   spawnbanana();
    spawnobstacle();
    
  
  monk.collide(ground);
  drawSprites();
  
  
}

function spawnbanana(){
  if(frameCount%80===0){
    banana=createSprite(650,350,20,30);
  banana.addImage("banana",bananaImage);
  banana.y=Math.round(random(250,350));
  banana.scale=0.08;
  banana.lifetime=200;
  banana.velocityX=-4;
  foodgroup.add(banana);
  
  }
  
}
 
function spawnobstacle(){
  if(frameCount%300===0){
    obstacle=createSprite(650,550,10,40);
    obstacle.addImage("obstacle",obstaceImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-3;
    obstacle.lifetime=200;
    obstaclegroup.add(obstacle);
  }
  
  
}




