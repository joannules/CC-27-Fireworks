var firework;
var gravity;

function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke(255);
    strokeWeight(4);

    gravity = createVector(0, 0.2);
    firework = new Particle(random(windowWidth), random(windowHeight));
}

function draw() {
    background(50);
    firework.applyForce(gravity);
    firework.update();
    firework.show();
}
