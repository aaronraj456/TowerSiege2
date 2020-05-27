class Band{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = this.pointB
        this.band = Constraint.create(options)
        World.add(world, this.band )
    }

    fly(){
        this.band.bodyA= null
    }

    display(){

        if(this.band.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8);
            line(pointA.x-20,pointA.y,pointB.x-20,pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y)
        }
    }
}