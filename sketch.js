var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
function preload()
{
    helicopterIMG=loadImage("helicopter.png")
    packageIMG=loadImage("package.png")
}

function setup() {
    createCanvas(800, 800);
    rectMode(CENTER);
    

    packageSprite=createSprite(width/2, 80, 10,10);
    packageSprite.addImage(packageIMG)
    packageSprite.scale=0.2

    helicopterSprite=createSprite(width/2, 200, 10,10);
    helicopterSprite.addImage(helicopterIMG)
    helicopterSprite.scale=0.6;

    groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor=color(255)

    engine = Engine.create();
    world = engine.world;

    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
    World.add(world, packageBody);
    
    box1 = new Box(400,600,200,20);
    box2 = new Box(300,600,20,200);
    box3 = new Box(500,600,20,200);

    //Create a Ground
    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);

    Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
   packageSprite.y= packageBody.position.y 
   box1.display();
   box2.display();
   box3.display();
  drawSprites();
 
}



  function keyPressed() {
    if (keyCode === LEFT_ARROW) {
  
      helicopterSprite.x=helicopterSprite.x-20;    
      translation={x:-20,y:0}
      Matter.Body.translate(packageBody, translation)
  
  
    } else if (keyCode === RIGHT_ARROW) {
      helicopterSprite.x=helicopterSprite.x+20;
      translation={x:20,y:0}
      Matter.Body.translate(packageBody, translation)
    }
    else if (keyCode === DOWN_ARROW) {
      Matter.Body.setStatic(packageBody,false);
      
    }
  }
  
   


