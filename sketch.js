const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1,platform2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24;

var ball;

var band;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  platform1=new Ground(550,200,150,10);
  platform2=new Ground(850,300,150,10);

  box1=new Box(550,180,20,30);
  box2=new Box(850,280,20,30);
  box3=new Box(530,180,20,30);
  box4=new Box(830,280,20,30);
  box5=new Box(570,180,20,30);
  box6=new Box(870,280,20,30);
  box7=new Box(510,180,20,30);
  box8=new Box(810,280,20,30);
  box9=new Box(590,180,20,30);
  box10=new Box(890,280,20,30);
  box11=new Box(540,150,20,30);
  box12=new Box(840,250,20,30);
  box13=new Box(520,150,20,30);
  box14=new Box(820,250,20,30);
  box15=new Box(560,150,20,30);
  box16=new Box(580,150,20,30);
  box17=new Box(570,120,20,30);
  box18=new Box(550,120,20,30);
  box19=new Box(530,120,20,30);
  box20=new Box(860,250,20,30);
  box21=new Box(880,250,20,30);
  box22=new Box(830,220,20,30);
  box23=new Box(850,220,20,30);
  box24=new Box(870,220,20,30);

  ball = new Ball(195,50,20,20);

  band = new Band(ball.body,{x:195,y:50})

  //createSprite(400, 200, 50, 50);
}

function draw() {
  Engine.update(engine);

  background("Black");  
  

  platform1.display();
  platform2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();


  ball.display();
  
  drawSprites();
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  //}
}

function mouseReleased(){
  band.fly();
}