class Stone {
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution: 1,
            friction:1,
            density:1.3
        }
        this.body = Bodies.circle(x,y,radius/4,options);
        this.img = loadImage("stone.png");
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        image(this.img,pos.x,pos.y,this.radius,this.radius);
    }
}