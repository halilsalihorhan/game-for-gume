export class Cannon {
    height = 60;
    rotation = 45;
    initial = 2000;
    position = {x:  120, y: 60};
    constructor() {

    }

    increment() {
        if(this.rotation>15)
        this.rotation -= 0.5;
    }

    decrement() {
        if(this.rotation<65)
        this.rotation += 0.5;
    }

    fire(){
        console.log(1)
    }

    charge(){
        this.initial += 150;
    }
}