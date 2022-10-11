class Drops{
    constructor(x,y){
        var options = {
            isStatic: false,
            friction: 0.2
        
        }
    this.radius = 1;
    this.rain= Bodies.circle(x,y,1,options);
    World.add(world, this.rain);
    }

    
    
    update(){
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,700)})
        }
    }

    display(){
        var pos = this.rain.position;
        ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius);
        strokeWeight(4);
        stroke('blue')

    }

}