//Create variables here
var dog,Hdog,database,foodS,foodStock;
var dog1;
var food;
var x=20;
function preload()
{
  //milk = loadImage("images/Milk.png");
  dog = loadImage("dogImg1.png");
  Hdog = loadImage("dogImg.png");
}

function setup() {
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock,writeStock);
 
  
    
  createCanvas(500,500);
  dog1 = createSprite(230,300,30,30);

  dog1.scale=0.3;
  
  
}


function draw() {  
  background(80,240,90);
 
  if (keyWentDown(UP_ARROW))
  {
    if (x<=0)
  {
    x=0;
  }
  else{
    x=x-1;
  }
         writeStock(foodS);
         dog1.addImage(Hdog);
  }
  else{
    dog1.addImage(dog);
  }
  //foodObj.display();
  drawSprites();
  //add styles here
  textSize(25);
  fill("white");
  stroke("yellow");
  text("Note:Press UP_ARROW Key To Feed",50,30);
  textSize(20);
  fill("white");
  text("Food Remaining:" +x,150,100);

}

function readStock(data){
  foodStock = data.val();
    
}
function writeStock(x){
  
  database.ref('/').update({
        })

}
