var dog;
var happyDog;
var foodS;
var foodStock;
var database;
var dogImage;
var happydogImage;

function preload()
{
dogImage=loadImage("Images/dogImg.png")
happydogImage=loadImage("Images/dogImg1.png")
}

function setup() {
  database=firebase.database()
	createCanvas(500, 500);
  dog= createSprite(250,250,10,10)
  dog.addImage(dogImage)
  dog.scale=.5
  foodStock= database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87)
   
  if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydogImage)
  }
  drawSprites();
  //add styles here
  fill("blue")
 stroke("red")
 textSize(20)
 
 text("press up arrow key to feed the dog",20,20)
 text("foodLeft :"+foodS,50,50)


}
 function readStock(data){
   foodS= data.val();
 }

 function writeStock(x){
   if(x<=0){
     x=0;
   
   }else{
     x=x-1;
   }
   database.ref('/').update({
    food:x 
   })
 }