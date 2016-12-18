function Firework() {

    this.particle = new Particle(random(windowWidth), random(windowHeight));
    this.exploded = false;
    this.fragments = [];

    this.update = function() {
        if (!this.exploded) {
            this.particle.applyForce(gravity);
            this.particle.update();
}
            if (this.particle.vel.y >= 0) {
                this.exploded = true;
                this.explode();
            }

            for (var i = 0; i < this.fragments.length; i++) {
                this.fragments[i].applyForce(gravity);
                this.fragments[i].update();
            }

    }

    this.explode = function() {
        for (var i = 0; i < 100; i++) {
            var fragment = new Particle(this.particle.pos.x, this.particle.pos.y);
            this.fragments.push(fragment);
        }
    }

    this.show = function() {
        if (!this.exploded) {
            this.particle.show();
        }
        for (var i = 0; i < this.fragments.length; i++) {
            this.fragments[i].show;
        }
    }
}
