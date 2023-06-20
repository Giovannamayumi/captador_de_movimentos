var nosex = 0;
var nosey = 0;
var wristlx = 0;
var wristrx = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
    posenet = ml5.poseNet(video, carregado);
    posenet.on("pose", result);
}
function draw() {
    background("black");
    fill("purple");
    stroke("darkblue");
    square(nosex,nosey,diferenca);
}
function carregado() {
    console.log("carregado");
}
function result(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        wristlx = results[0].pose.leftWrist.x;
        wristrx = results[0].pose.rightWrist.x;
        diferenca=floor(wristlx-wristrx); 
    }
}