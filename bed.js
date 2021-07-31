function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Object";}


    function modelLoaded(){
        console.log("model Loaded!");
        status=true;
        objectDetector.detect(img,gotResult);
        
    }
    function gotResult(error,results){

        if(error){
            console.log(error);
        }
         
            console.log(results);
            
            
    }

    
function preload(){
    img=loadImage("Bedroom.jpeg");
}

img="";
status="";

function back(){
    window.location="index.html";
}

function draw(){
    image(img,0,0,380,380);
}
