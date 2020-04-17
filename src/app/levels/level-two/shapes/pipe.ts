export class Pipe{

    interval = 15;
    height = 20;
    width = 40;
    position = 0;
    constructor(mode: number){
        if(mode == 0)
            this.height = 5 + Math.random()*30;
        else
            this.height = 20;

    }
    move(){
        this.position += 0.5;
    }
}
