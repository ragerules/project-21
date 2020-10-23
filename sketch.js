
var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
 
  speed = random(30,52);
  weight = random(223,321);
  thickness = random(22,83);

  bullet = createSprite(100,200,10,30);
  bullet.velocityX = speed;

  wall = createSprite(1500,200,thickness,height/2);
}

function draw() {
  background(0,0,0);  

  if (wall.x - bullet.x < (wall.width + bullet.width)/2) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed *speed/(thickness * thickness * thickness);

    if(damage > 10) {
      bullet.shapeColor = color(255,0,0);
    }

    if(damage < 10) {
      bullet.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}
