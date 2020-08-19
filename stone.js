class Stone {
    constructor(x,y,radius){
        var options = {
            isStatic: true,
            restitution: 0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
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