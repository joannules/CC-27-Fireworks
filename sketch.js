var fireworks = [];
var gravity;

function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke(255);
    strokeWeight(4);

    gravity = createVector(0, 0.2);
    fireworks.push(new Firework());
}

function draw() {
    background(50);
    if (random(1) < 0.1) {
        fireworks.push(new Firework());
    }
    for (var i = 0; i < fireworks.length; i++) {
        fireworks[i].update();
        fireworks[i].show();
    }
}
