const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies =  Matter.Bodies;

var engine;
var world;

var box;

function setup() {

  engine = Engine.create();
  world = engine.world;


  
  createCanvas(800,800);
 
}

function draw() {
  background("lightblue");  
 
}