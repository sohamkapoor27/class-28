// instead of writing Matter.Engine,World, Bodies again we are making it short

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// to create variables
var engine, world;
var ground, ball,box1,box2,box3,box4,box5;
var pigs,pigs2,logs,logs2,logs3,logs4;
var hills,birds,bg,slingshot;


function preload(){
   bg = loadImage("bg.png")
}

function setup(){
    var canvas= createCanvas(600,480);
  
  // to create our engine in code
    engine = Engine.create();
  
  // to create world inside the engine
    world = engine.world;

  
    
  box1=new Box(380,300,35,35);
   box2=new Box(500,300,35,35);
  box3=new Box(380,150,35,35);
   box4=new Box(500,150,35,35);
  box5=new Box(435,80,35,35);
  ground=new Ground(300,475,600,20);
  pigs = new Pig(440,300);
   pigs2 = new Pig(440,150);
  logs = new Log(440,200,180,PI/2);
  logs2 = new Log(440,130,180,PI/2);
   logs3 = new Log(470,70,80,-PI/7);
  logs4 = new Log(420,70,80,PI/7);
  hills = new Hill(65,400)
  logs5 = new Log(50,50,35,PI/2);
  birds = new Bird(100,350)
  slingshot = new Sling(birds.body,{x:100,y:250})
}


function draw(){
  
// to set background 
    background(bg);
  
Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  pigs.display();
  pigs2.display();
  logs.display();
  logs2.display();
  logs3.display();
  logs4.display();
  hills.display();
  birds.display();
  logs5.display();
  slingshot.display();
}


function mouseDragged(){
  Matter.Body.setPosition(birds.body,{x:mouseX,y:mouseY});
  
}

function mouseReleased(){
  slingshot.fly();
}



