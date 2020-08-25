class normal {
    constructor(x,y,width,height){
        var options = {
          isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.boy = loadImage("boy.png");
        this.tree = loadImage("tree.png");
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.boy,150,610,250,250);
        image(this.tree,550,480,400,400);
        rect(pos.x,pos.y,this.width,this.height)    
    }
}