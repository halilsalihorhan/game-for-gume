export class Gate{
    angle = 0;
    constructor(){
    }

    private increment(){
        this.angle ++;
    }
    open(){
        setInterval(()=>{
            if(this.angle < 90)
                this.increment();
        },20)
    }
}