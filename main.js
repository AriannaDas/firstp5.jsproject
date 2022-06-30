function preload() {

}

function setup() {
    canvas = createCanvas(700, 550);
    canvas.position(290, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230, 170, 250, 250);
    circle(150, 120, 70);
    circle(560, 120, 70);
    circle(150, 460, 70);
    circle(560, 460, 70);
    rect(220, 120, 270, 50, 20);
    rect(220, 420, 270, 50, 20);
    rect(180, 140, 50, 300, 20);
    rect(480, 140, 50, 300, 20);
    let c = color('lightblue');
    fill(c);
    noStroke();
}

function take_snapshot() {
    save("student_name.png");
}