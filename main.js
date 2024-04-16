NoseX = 0;
NoseY = 0;


function preload(){
moustache = loadImage("https://i.postimg.cc/9Fn3yyk3/moustache-silhouette-man-mustache-free-svg-file-Svg-Heart-Com-removebg-preview.png");
}
function setup(){
canvas = createCanvas(300,300);
canvas.center();

video = createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet = ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}
function draw(){
image(video,0,0,300,300);
image(moustache,NoseX - 35,NoseY + 10,80,30);
}
function SaveImage(){
    save("moustache.png");
}
function modelLoaded(){
    console.log("posenet is initialised")
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
   NoseX=results[0].pose.nose.x;
   NoseY=results[0].pose.nose.y;
   console.log("nose x = "+NoseX);
   console.log("nose y = "+NoseY);
}
}