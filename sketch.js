var firework;

function setup() {
  createCanvas(windowWidth,windowHeight);
  stroke(255);
  strokeWeight(4);
  firework = new Particle(random(windowWidth),random(windowHeight));
}

function draw() {
  background(50);
  firework.update();
  firework.show();
}
