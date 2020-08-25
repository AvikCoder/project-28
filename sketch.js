
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
	mango1 = new Mango(550,420,50,50)
	mango2 = new Mango(450,440,50,50)
	mango3 = new Mango(650,380,50,50)
	mango4 = new Mango(500,340,50,50)
	mango5 = new Mango(600,340,50,50)
	mango6 = new Mango(700,430,50,50)



	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  aa.display();
  ground.display();
  stone1.display();
  slingSS.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  detectCollision(stone1,mango1)
  detectCollision(stone1,mango2)
  detectCollision(stone1,mango3)
  detectCollision(stone1,mango4)
  detectCollision(stone1,mango5)
  detectCollision(stone1,mango6)
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingSS.fly();
}


function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
}