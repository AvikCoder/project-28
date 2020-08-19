
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	aa = new normal();
	ground  = new normal(400,670,800,20)
	stone1 = new Stone(70,550,80,80)
	slingSS = new SlingShot(stone1.body,{x:70,y:560})
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  aa.display();
  ground.display();
  stone1.display();
  slingSS.display();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingSS.fly();
}

