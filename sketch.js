
var wall,thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  weight  = random (223,321)
 speed = random (30,52)


 bullet = createSprite(50,200,50,50)
  
 wall = createSprite (1200,200,thickness,height/2)
 wall.shapeColor = color(80,80,80)

 bullet.velocityX = speed ;


thickness=random(22,83)


}



function draw() {
  background(0);  
  drawSprites();

 

 





if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);

  }
  if(damage<10)
  {
    wall.shapeColor=color(0,255,0)
  }
}




}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false ;

 
}