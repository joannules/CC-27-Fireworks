var firework;

function setup() {
  createCanvas(windowWidth,windowHeight);
  stroke(255);
  strokeWeight(4);
  firework = new Particle(windowWidth/2,windowHeight/2);
}

function draw() {
  background(50);
  firework.update();
  firework.show();
}
