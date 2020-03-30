export class Cannon {
    height = 6;
    rotation = 4.5;
    initial = 200;
    constructor() {}
    increment() {
        if(this.rotation>15)
        this.rotation -= 0.5;
    }
    decrement() {
        if(this.rotation<65)
        this.rotation += 0.5;
    }
    charge(){
        this.initial += 15;
    }
}