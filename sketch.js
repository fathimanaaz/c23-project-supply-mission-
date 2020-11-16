var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1;
var box2;
var box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}
 
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-40, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	var options ={
	   restitution:0.5  
	}

    box1 = new Box(390,650,150,20);
    box2 = new Box(320,620,20,80);
    box3 = new Box(470,620,20,80);

	packageBody = Bodies.circle(width/2 , 200 , 10 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 638, width, 20 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}

function draw() {
  background(0);

  rectMode(CENTER);
  
  Engine.update(engine);


  box1.display();
  box2.display();
  box3.display();
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite.x= helicopterSprite.x

  if(keyDown("left")){
	helicopterSprite.x=helicopterSprite.x-3;
  }

  if(keyDown("right")){
	helicopterSprite.x=helicopterSprite.x+3;
  }

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) { 

	Matter.Body.setStatic(packageBody,false);
    
  }
}