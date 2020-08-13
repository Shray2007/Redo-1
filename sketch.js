var bullet,wall;
var speed,weight;
var damage;
var thickness;

function setup() {

  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  bullet=createSprite(50,200,50,50);
  wall=createSprite(800,200,60,height/2);
  thickness=random(22,83);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  
  if(wall.x-bullet.x <= bullet.width/2 + wall.width/2 ){
   damage=(0.5*speed*weight)/(thickness*thickness*thickness);
   if(damage<10){
     wall.shapeColor="green";
     }
     else {
      wall.shapeColor="red";
     }

  
  }
  
drawSprites();
}
