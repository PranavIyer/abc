var ground; 

var boxes;
var boxes1;
var boxes2;
var boxes3;
var boxes4;
var boxes5;
var boxes6;
var boxes7; 
var boxes8;

var x; 

function setup() {
    createCanvas(400,400);

    ground = createSprite(200, 370, 400, 80);
    ground.shapeColor = "brown";

    boxes = createSprite(44, 10, 20, 20);
    boxes.shapeColor = "blue";

    boxes1 = createSprite(88, 10, 40, 10);
    boxes1.shapeColor = "pink";

    boxes2 = createSprite(132, 10, 40, 50);
    boxes2.shapeColor = "yellow";

    boxes3 = createSprite(176, 10, 10, 20);
    boxes3.shapeColor = "indigo";

    boxes4 = createSprite(220, 10, 30, 45);
    boxes4.shapeColor = "violet";

    boxes5 = createSprite(264, 10, 40, 5);
    boxes5.shapeColor = "black";

    boxes6 = createSprite(308, 10, 2, 50);
    boxes6.shapeColor = "grey";

    boxes7 = createSprite(352, 10, 30, 30);
    boxes7.shapeColor = "orange";

    boxes8 = createSprite(386, 10, 8, 20);
    boxes8.shapeColor = "grey";

    x = createSprite(200, 10, 400, 100);
    x.shapeColor = "black";
}

function draw() {
  background(255, 0, 0);
  
  boxes.collide(ground);
  boxes1.collide(ground);
  boxes2.collide(ground);
  boxes3.collide(ground);
  boxes4.collide(ground);
  boxes5.collide(ground);
  boxes6.collide(ground);
  boxes7.collide(ground);
  boxes8.collide(ground);
  
  if (keyDown("a")) {
    boxes.velocityY = boxes.velocityY + 3;
  }
  
  if (keyDown("b")) {
    boxes1.velocityY = boxes1.velocityY + 3;
  }
  
  if (keyDown("c")) {
    boxes2.velocityY = boxes2.velocityY + 7;
  }
  
  if (keyDown("d")) {
    boxes3.velocityY = boxes3.velocityY + 2.5;
  }
  
  if (keyDown("e")) {
    boxes4.velocityY = boxes4.velocityY + 5;
  }
  
  if (keyDown("f")) {
    boxes5.velocityY = boxes5.velocityY + 4;
  }
  
  if (keyDown("g")) {
    boxes6.velocityY = boxes6.velocityY + 3;
  }
  
  if (keyDown("h")) {
    boxes7.velocityY = boxes7.velocityY + 5;
  }
  
  if (keyDown("i")) {
    boxes8.velocityY = boxes8.velocityY + 2.8;
  }

  drawSprites();
}