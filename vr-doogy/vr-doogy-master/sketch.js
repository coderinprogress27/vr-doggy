//Create variables here
var dogimage
var doghappyimage
var dog
var database
var foods
var foodstock
function preload()
{
  //load images here
dogimage=loadImage("images/dogImg.png")
doghappyimage=loadImage("images/dogImg1.png")
 
  
  
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database()
  foodstock=database.ref('Food')
foodstock.on("value",readStock)
dog = createSprite(400,300,50,50)
dog.addImage(dogimage)
dog.scale=0.23
}


function draw() {  
  background(46,139,87)
  drawSprites();
  //add styles here
if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(doghappyimage)
  
}
if(keyWentUp(UP_ARROW)){
  dog.addImage(dogimage)
}
textSize(15)
fill(255,255,254)
stroke(10)
text("Note:Press UP_ARROW Key to Feed doogy the doggy",50,20)
}
function readStock(data){
  foods=data.val()
}
function writeStock(x){
  if(x===0){
    x=0
  }else{x=x-1}
  database.ref('/').update({
    Food:x
  })
}


