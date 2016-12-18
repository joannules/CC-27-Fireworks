

function Firework() {

  this.particle = new Particle(random(windowWidth),random(windowHeight));

  this.update = function () {
    this.particle.applyForce(gravity);
    this.particle.update();
  }

  this.show = function() {
        this.particle.show();
  }
}
