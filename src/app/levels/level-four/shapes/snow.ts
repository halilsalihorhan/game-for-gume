import { Swan } from './swan';

export class Snow{
    position: number;
    altitude = 0;
    velocity = 1;
    floor = 45;
    delay = 0;
    isExist = true;
    swan:Swan;
    private time;
    constructor(swan:Swan){
        this.position = Math.floor(Math.random()*10)*6;
        this.time = new Date().getTime();
        this.swan = swan;
    }

    move() {
        var deltaTime = new Date().getTime() -this.time;
        this.time = new Date().getTime();
        this.altitude += this.velocity*deltaTime/100;
        this.check();
    }
    init(){
        setInterval(()=>{
            
            if(this.floor>= this.altitude)
                this.move();
            else 
                this.destroy();
        },20)
    }
    destroy(){
        this.isExist = false;
    }

    check(){
        if(Math.abs(this.position-this.swan.position)<= 3)
            if(Math.abs(this.altitude - 50) <= 8)
                if(this.isExist){
                    this.swan.score();
                    this.destroy();
                }
                    
    }

}