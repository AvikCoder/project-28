class Mango {
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;    
        this.height = height
        this.image = loadImage("mango.png");
    }
    display(){
        var pos = this.body.position
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);

    }
}