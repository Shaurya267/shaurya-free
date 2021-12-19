
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var leftSide;
var rightSide;

/*function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		ball.x = ball.x + 3;
	}	
}*/

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

 //Create the Bodies Here.
 ball = Bodies.circle(200,100,20,ball_options);
 World.add(world,ball);

	Engine.run(engine);

  var ball_options = 
  {
		//isStatic:false,
		restitution:0.95,
		//friction:0
  }  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background(0);

  //drawSprites();

 ground=new Ground(width/2,670,width,20);
 leftSide = new Ground(650,600,20,120); 
 rightSide = new Ground(500,600,20,120);

 ground.display();
 leftSide.display();
 rightSide.display();

 ellipse(ball.position.x,ball.position.y,20);
 Engine.update(engine);
}



