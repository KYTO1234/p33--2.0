var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);
    
}

 function preload() {
  backroundImg = loadImage("snow2.jpg");
}


function draw() {
  background(backroundImg);
  textSize(20)
 
  Engine.update(engine);
  
  
 

  //create the particles using frameCount
if(frameCount%60===0){
  particles.push(new Particles(random(0,800),0))
}

  //display the particles 
for (var k=0; k < particles.length; k++){
particles[k].display();
}

ground.display();
}