var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,350,200, 15);

	bobObject1 = new Bob(400, 550, 20);
	bobObject2 = new Bob(440, 550, 20);
	bobObject3 = new Bob(480, 550, 20);
	bobObject4 = new Bob(360, 550, 20);
	bobObject5 = new Bob(320, 550, 20);

	//adding the constraint ropes
	rope1 = new Rope(bobObject1.body, Roof.body, -40*2, 0);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  
  drawSprites();
 
}



