var stone1;
var ground1;
var iron;
var sand1;
var sand2;
var sand3;
var sand4;
var sand5;
var sand6;
var sand7;
var sand8;
var sand9;
var sand10;
var sand11;
var sand12;
var sand13;
var sand14;
var sand15;
var Ball;
var box1;
var rubber;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1200,700); 


	engine = Engine.create();
	world = engine.world;

  stone1 = new Stone (700,320,100,100)
  ground1 = new Ground(450,690,1400,10)
  iron = new Iron(320,320,120,80)
  sand1  = new Sand(600,320,5)
  sand2 = new Sand(610,320,5)
  sand3 = new Sand(620,320,5)
  sand4 = new Sand(620,320,5)
  sand5= new Sand(620,320,5)
  sand6 = new Sand(620,320,5)
  sand7= new Sand(620,320,5)
  sand8 = new Sand(620,320,5)
  sand9 = new Sand(620,320,5)
  sand10 = new Sand(620,320,5)
  sand10 = new Sand(620,320,5)
  sand11= new Sand(620,320,5)
  sand12= new Sand(620,320,5)
  sand13 = new Sand(620,320,5)
  sand14 = new Sand(620,320,5)
  box1 = new  Box1(600,400,100,50)
  rubber=new Rubber(900,450,70)
    

	



Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 Engine.update(engine);
  background("lightblue");
  stone1.display();
  ground1.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
 sand5.display();
 sand6.display();
 sand7.display();
 sand8.display();
 sand9.display();
 sand10.display();
 sand11.display();
 sand12.display();
 sand13.display();
 rubber.display();
 
 box1.display();
 
  
  drawSprites();
 
}



