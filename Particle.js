class Particles {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        //give color property 
        
        this.image=loadImage("snow4.webp")
        
        this.color = color(random(0,225),random(0,225),random(0,225));
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
       // fill(this.color);
       // ellipseMode(RADIUS);
       image(this.image,10,10,80,80);
      
        
        pop();
    }

};