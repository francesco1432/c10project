var ship, ship_rowing;
var seaImage;
var sea;

function preload(){
  ship_rowing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png")
}


function setup(){
  createCanvas(400,400);
  sea=createSprite(150,20,400,200);
 sea.addImage("sea",seaImage);
 sea.x=sea.width/2;
 sea.scale = 1;
  ship = createSprite(100,160,20,120);
  ship.addAnimation("rowing", ship_rowing);
ship.scale = 0.2;

}



function draw() {
  background("blue");
  sea.velocityX=-2;
  if(sea.x < 0){
    sea.x=sea.width/2;
  }
  drawSprites();

}