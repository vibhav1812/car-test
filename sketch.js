var car, car1, wall;
var speed,speed1, weight 

function setup() {
createCanvas(1600,400)
  speed = random(55,90);
  speed1 = random(55,90);
  weight = random(400,1500)
  car = createSprite(50,200,50,50);
  car1 = createSprite(50,300,50,50);
  car.velocityX = speed;
  car1.velocityX = speed1;
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color("black")
}

function draw() {
  background("white");  
  if(wall.x-car.x<(car.width+wall.width)/2){
   car.velocityX = 0
   car.x = 1450;
    var deformation = 0.5* weight * speed * speed/22509;
    if(deformation >180){
      car.shapeColor = color("red");
    }
    if(deformation <100){
      car.shapeColor = color("green");
    }
    if(deformation <180 && deformation >100){
      car.shapeColor = color("yellow");
    }
  }
  if(wall.x-car1.x<(car1.width+wall.width)/2){
    car1.velocityX = 0
    car1.x = 1450;
     var deformation1 = 0.5* weight * speed1 * speed1/22509;
     if(deformation1 >180){
       car1.shapeColor = color("red");
     }
     if(deformation1 <100){
       car1.shapeColor = color("green");
     }
     if(deformation1 <180 && deformation >100){
       car1.shapeColor = color("yellow");
     }
   }

  drawSprites();
}

