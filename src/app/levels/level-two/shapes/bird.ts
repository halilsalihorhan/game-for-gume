export class Bird {
     x = 55;
     y = 30;
     velocity = 10;
    private time;
    constructor() {
        this.time = new Date().getTime();
    }

   
    move(accelaration:number){
        var deltaTime = new Date().getTime() -this.time;
        this.time = new Date().getTime();
        this.velocity += accelaration* deltaTime;
        this.y += this.velocity*deltaTime/10000;
        
    }
    start(){
        this.time = new Date().getTime();
    }
  }
  