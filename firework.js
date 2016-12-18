

function Firework() {

  this.particle = new Particle(random(windowWidth),random(windowHeight));

  this.update = function () {
    this.firework.applyForce(gravity);
    this.firework.update();
  }

  this.show = function() {
        this.firework.show();
  }
}
