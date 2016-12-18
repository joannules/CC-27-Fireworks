

function Firework() {

  this.particle = new Particle(random(windowWidth),random(windowHeight));

  this.update = function () {
    firework.applyForce(gravity);
    firework.update();
  }

  this.show = function() {
        firework.show();
  }
}
