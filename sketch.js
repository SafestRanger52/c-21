var fixedRect, movingRect;
var gObj1, gObj2, gObj3, gObj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gObj1 = createSprite(100,100,50,50);
  gObj2 = createSprite(200,100,50,50);
  gObj3 = createSprite(300,100,50,50);
  gObj4 = createSprite(400,100,50,50);
  gObj1.shapeColor = "green";
  gObj2.shapeColor = "green";
  gObj3.shapeColor = "green";
  gObj4.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(movingRect,gObj1)) { 
   movingRect.shapeColor = "blue";
   fixedRect.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
   
 
  drawSprites();
}
