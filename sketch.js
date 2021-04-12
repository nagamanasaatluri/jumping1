const Engine = Matter.Engine;
const World= Matter.World; 
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world; 
  box = Bodies.rectangle(400,100,50,100);
  World.add(world, box);
  var order={
    isStatic:true
  }
  ground = Bodies.rectangle(0,580,250,50,order)
  World.add(world, ground)
  ground2 = Bodies.rectangle(300,580,250,50,order)
  World.add(world, ground2)
  ground3 = Bodies.rectangle(600,580,250,50,order)
  World.add(world, ground3)
  ground4 = Bodies.rectangle(900,580,250,50,order)
  World.add(world, ground4) 

}

function draw() {
  background(0); 
Engine.update(engine);
fill("green")
rect(box.position.x,box.position.y,50,100)
fill ("pink") 
rect(ground.position.x,ground.position.y,250,50)
fill("blue")
rect(ground2.position.x,ground2.position.y,250,50)
fill("purple")
rect(ground3.position.x,ground3.position.y,250,50)
fill("yellow")
rect(ground4.position.x,ground4.position.y,250,50)
}