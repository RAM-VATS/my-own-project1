const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var line1
var mammoth
var elephant;
var cup;


function preload(){
// elephantimg=loadImage("elephant.png")
 //mammothimg=loadImage("mammoth.png")
 //cup=loadImage("cup.png")
}

function setup(){
createCanvas(3000,700)
engine=Engine.create();
world=engine.world;

ground = new Ground(600, 600, 1200, 20);
 mammoth=createSprite(700,500,20,20);
 elephant=createSprite(900,700,20,20);
 cup=createSprite(1500,600,20,20);

line1=createSprite(1500,350,5,700);

}

function draw(){
    background("white");

    
    if (keyDown(UP_ARROW)){
        elephant.velocityX=0
        elephant.velocityY=-3;
       }
    
       if (keyDown(DOWN_ARROW)){
        elephant.velocityX=0
        elephant.velocityY=3;
       }   
   







       if (keyDown("W")){
        mammoth.velocityX=0
        mammoth.velocityY=-3;
       }
    
       if (keyDown("S")){
        mammoth.velocityX=0
        mammoth.velocityY=3;
       }   
   
    

       if(elephant.istouching(cup)){
           textSize(25);
           textFont("Bold");
           text("YOU WIN",2500,500);
       }
       textSize(30)
       text("CUP",1000,550)
       textSize(30)
       text("elephant",800,600)
       text("mammoth",600,400);
       
       if(elephant.istouching(cup)){
           elephant.velocityX=0;
           elephant.velocityY=0;
       }

       if(mammoth.istouching(cup)){
        mammoth.velocityX=0;
        mammoth.velocityY=0;
    }
       
       
}