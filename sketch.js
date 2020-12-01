const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var hexagon,hexagonimg,ground1,slingShot,plat1,plat2;
//platform 1 boxes
var boxp11,boxp12,boxp13,boxp14,boxp15,boxp16,boxp17,boxp18,boxp19,boxp110;
//platform 1 boxes end
//platform 2 boxes
var boxp111,boxp112,boxp113,boxp114,boxp115,boxp116,boxp117,boxp118,boxp119,boxp120;
//platform 2 boxes end

function preload(){
  hexagonimg = loadImage("polygon.png");
  
}
function setup() {
  createCanvas(1360,600);
  engine = Engine.create();
  world = engine.world;
  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new slingshot(this.polygon,{x:100,y:200});
  ground1 = new Ground(680,595,1360,10);
  //slingShot = new slingshot(hexagon.body,{y:50});
  plat1 = new Ground(480,395,210,15);
  plat2 = new Ground(1080,280,210,15);
  boxp11 = new Box(405,394,50,50);
  boxp12 = new Box(505,394,50,50);
  boxp13 = new Box(455,394,50,50);
  boxp14 = new Box(555,394,50,50);
  boxp15 = new Box(435,244,50,50);
  boxp16 = new Box(485,244,50,50);
  boxp17 = new Box(535,244,50,50);
  boxp18 = new Box(465,190,50,50);
  boxp19 = new Box(515,190,50,50);
  boxp110 = new Box(495,100,50,50);
  boxp111 = new Box(1000,250,50,50);
  boxp112 = new Box(1050,250,50,50);
  boxp113 = new Box(1100,250,50,50);
  boxp114 = new Box(1150,250,50,50);
  boxp115 = new Box(1025,200,50,50);
  boxp116 = new Box(1075,200,50,50);
  boxp117 = new Box(1125,200,50,50);
  boxp118 = new Box(1050,150,50,50);
  boxp119 = new Box(1100,150,50,50);
  boxp120 = new Box(1075,100,50,50);

  
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  imageMode(CENTER)
  image(hexagonimg ,polygon.position.x,polygon.position.y,40,40);
ground1.display();
plat1.display();
plat2.display();
var green = Math.round(random(0,500));
fill(0,green,0);
boxp11.display();
boxp12.display();
boxp13.display();
boxp14.display();
boxp111.display();
boxp112.display();
boxp113.display();
boxp114.display();
var blue = Math.round(random(0,500));
fill(0,0,blue);
boxp15.display();
boxp16.display();
boxp17.display();
boxp115.display();
boxp116.display();
boxp117.display();
var pink = Math.round(random(0,500));
fill(pink,0,blue);
boxp18.display();
boxp19.display();
boxp118.display();
boxp119.display();
fill(pink,random(0,100),0);
boxp110.display();
boxp120.display();
slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}