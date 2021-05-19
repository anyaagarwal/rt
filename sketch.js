const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var thyme;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    
}

function draw(){

   

    if(backgroundImg){
        background(backgroundImg);

    }

    

    Engine.update(engine);

    
   
    text("TIME:~"+thyme,50,50);
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime=responseJSON.datetime;
    var hour=dateTime.slice(11,13);

    if(hour>=24 && hour<=4){
        bg="s-1.JPG";
    }else if(hour>=4 && hour<=8){
        bg="s-2.JPG";
    }else if(hour>=8 && hour<=12){
        bg="s-3.JPG";
    }else if (hour>=12 && hour<=16){
        bg="s-4.JPG";
    }else if (hour>=16 && hour<=20){
        bg="s-5.JPG";
    }else if (hour>=20 && hour<=24){
        bg="s-6.JPG";
    }

    

    backgroundImg=loadImage(bg);
    console.log(backgroundImg);

}
