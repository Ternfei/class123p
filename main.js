function setup(){
    video = createCapture(VIDEO);
    video.size = (500,500);
    canvas = createCanvas(550,550);
    canvas.position(650,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('posenet is intialised');
}

function gotPoses(results){
     if(results.length >0){
         console.log(results);
     }
}

function draw(){
    background('grey');
}