var mario1,bg,mario2,hero,block,mushroom,pipe,reward,ground,super1,super2;
var mario1_img,bg_img,mario2_img,hero_img,block_img,mushroom_img,pipe_img,reward_img,super1_img,super2_img;
var mushroomGroup;

function preload(){
  bg_img=loadImage("images/background.jpg");
  screen_img=loadImage("images/screen.png");
  mario1_img=loadAnimation("images/hero.png","images/heromove.png");
  mario2_img=loadImage("images/jump.png");
  hero_img=loadAnimation("images/big.png","images/bigmove1.png","images/bigmove2.png");
  hero2_img=loadImage("images/bigjump.png");
  block_img=loadImage("images/block.png");
  mushroom_img=loadImage("images/mushroom.png");
  pipe_img=loadImage("images/pipe.png");
  reward_img=loadImage("images/reward.jpg");
  super1_img=loadAnimation("images/super1.png","images/supermove1.png","images/supermove2.png","images/supermove3.png","images/supermove4.png");
  super2_img=loadImage("images/superjump.png");
  score1_img=loadImage("images/100.png");
  score2_img=loadImage("images/200.png");
  score3_img=loadImage("images/1000.png");
  flower_img=loadImage("images/flower.png");
  fire_img=loadImage("images/fire.png");
  coin_img=loadImage("images/coin.png");
  groundimg = loadImage("images/ground.png");
}
function setup(){
  createCanvas(displayWidth-20,displayHeight-110)

  bg=createSprite(500,640,5000,650);
  bg.addImage(groundimg);
  bg.scale=0.7;

  ground=createSprite(displayWidth/2,displayHeight-230,displayWidth,20);
  ground.visible=false;

  mario1=createSprite(displayWidth/20,displayHeight/1.5,50,50);
  mario1.addAnimation("mario",mario1_img);
  mario1.addAnimation("mario",hero_img); 
  mario1.addAnimation("mario",super1_img);
  mario1.scale=0.8;
  mario1.setCollider("circle",0,0,30)
  
  screen=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  screen.addImage(screen_img);
  screen.visible=false;
  mushroomGroup = new Group();

}
function draw(){
  background(95,150,255)
  
  
  if(keyDown("space") ){
    mario1.velocityY=-10;
    mario1.addAnimation("mario",hero_img);
  }
  mario1.velocityY=mario1.velocityY+0.7;

  if(keyIsDown(LEFT_ARROW)) {
    mario1.x -= 5;
  }

  if(keyIsDown(RIGHT_ARROW)) {
    mario1.x += 5;
  }

 
  //camera.position.x = mario1.x +600;
  
  mario1.collide(ground)
 /* food();
  if(mushroomGroup.isTouching(mario1)){
    mario1.addAnimation(hero_img);
  }*/

  drawSprites();
} 

function food(){
  if(frameCount % 60 == 0){
    var food = createSprite(displayWidth,displayHeight/2+130);
    food.velocityX = -4;
    food.addImage(mushroom_img);
    food.scale=0.3;
    mushroomGroup.add(food);
  }
}