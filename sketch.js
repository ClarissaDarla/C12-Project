var boy,runner;
var path,pathImg;
var invisible_path1,invisible_path2;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runner = loadAnimation("runner-1.png","runner-2.png");
}

function setup(){
  createCanvas(400,400);
  
  //create sprites here
  path = createSprite (200,200,50,50);
  path.addImage ("p1",pathImg);
  path.velocityY = 4;
  path.scale = 1.2

  boy=createSprite(200,300,25,25);
  boy.addAnimation ("b1",runner);
  boy.scale=0.1;

  invisible_path1 = createSprite(10,300,25,400);
  invisible_path2 = createSprite(390,300,25,400);

  invisible_path1.visible=false;
  invisible_path2.visible=false;

}

function draw() {
  background("black");
  
  if(path.y > 400){
    path.y = height/2;
  }

  boy.collide(invisible_path1);
  boy.collide(invisible_path2);
  
  
  drawSprites();
}
