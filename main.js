status = "";

function setup() {
    canvas = createCanvas(620, 420);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    video.size(640, 420);

}

function start() {
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects"
    input = document.getElementById("input").value;
  }

function modelLoaded() {
   console.log('Model Loaded!');
   status = true;
}
function draw() {
    image(video, 0, 0, 600, 400);
}