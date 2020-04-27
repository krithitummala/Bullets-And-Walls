
var bullet,weight,speed,thickness;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;

var wall;
var packageBody;

function setup() {
  createCanvas(1600,400);
  rectMode(Center);

  engine = Engine.create();
  world = engine.world;

  bullet = Bodies.rectangle(10,200,50,50);
  bullet.shapecolor("WHITE");
  weight = random(30,52);
  speed = random(223,321);
  bullet.velocityX = 3;
  World.add(world,bullet);

  wall = Bodies.rectangle(1500,200,50,50);
  bullet.shapeColor(80,80,80);
  thickness = random(22,83);
  World.add(world,wall);

  

  Engine.run(engine);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  
  rect(bullet.position.x,bullet.position.y,40,40);
  rect(wall.position.x,wall.position.y,50,50);

  if(wall.x-bullet.x<=wall.width/2+bullet.width/2&&
    bullet.x-wall.x<=wall.width/2+bullet.width/2&&
    wall.y-bullet.y<=wall.height/2+bullet.height/2&&
    bullet.y-wall.y<=wall.height/2+bullet.height/2){
        bullet.velocityX = 0;
 }
  drawSprites();
}