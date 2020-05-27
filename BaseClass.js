class BaseClass{
    constructor(x, y, width, height, angle, friction1) {
        var options = {
            'restitution':0.8,
            'friction':friction1,
            'density':0.4
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}