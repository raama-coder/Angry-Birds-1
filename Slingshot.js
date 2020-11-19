class Slingshot{

    constructor(bodyA, bodyB){
        var options = {
            bodyA:bodyA,
            length:20,
            bodyB:bodyB,
            stiffness:0.15
        }
this.link=Constraint.create(options);
World.add(world, this.link)
    }

    display(){
strokeWeight(3)
var pointA = this.link.bodyA.position
var pointB = this.link.bodyB.position
line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}