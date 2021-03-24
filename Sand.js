class Sand {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      fill("red");
      ellipse(0,0,5,5)
      pop();
    } 
  };
  