
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
  createCanvas(800,400);

  var Character = loadImage("bb8.png")
  Character = addImage("bb8")

  var saber = loadImage("saver.gif")
  saber = addImage("saber")
  
  var BG = loadImage("BG.jpg")
  BG = addImage("background")



  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}

