export class Pipe{

    interval = 150;
    height = 200;
    width = 40;
    position = 0;
    constructor(mode: number){
        if(mode == 0)
            this.height = 50 + Math.random()*300;
        else
            this.height = 200;

    }
    move(){
        this.position += 5;
    }
}