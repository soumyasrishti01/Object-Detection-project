status = "";
img = "";

function preload() {
    img = "TV pic";
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();

    objectDetection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("tv_detect").innerHTML = "Detecting Object";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
}