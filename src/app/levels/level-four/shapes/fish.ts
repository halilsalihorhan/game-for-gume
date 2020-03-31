export class Fish {
    position = 4;
    altitude = 4;
    velocity = 1;
    private time;
    direction = 0;
    constructor(){
        this.time = new Date().getTime();
    }
    private move(){
        var deltaTime = new Date().getTime() -this.time;
        this.time = new Date().getTime();
        if(this.direction == 0)
            this.position += this.velocity*deltaTime/100;
        else
            this.position -= this.velocity*deltaTime/100;
        if(this.position>=60){
            this.altitude = 3 + 3* Math.random();
            this.direction = 1;
        } 
        if(this.position<=4) this.direction = 0;
       
    }
    init(){
        setInterval(()=>{
            this.move();
          },20);
    }
}