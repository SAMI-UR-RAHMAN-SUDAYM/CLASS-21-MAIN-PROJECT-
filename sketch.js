const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var b1,b2
function setup() {
  createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;
 

var balloption={
  isStatic:false,
  restitution:0.3,
  friction:0,
  dendity:1.2
  }
  ball=Bodies.circle(200,200,20,balloption)
  World.add(world,ball)
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 

GroundObj=new ground(width/2,670,width,20);
leftSide=new ground(1100,600,20,120);

 rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  graoundObj.display()

  
}

function keyPressed() {
  
  if (keyCode === UP_ARROW){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:-85})


  }
}










































