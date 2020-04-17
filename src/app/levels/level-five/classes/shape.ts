export abstract class Shape {
    positionX: number;
    positionY: number;
    width:  number;
    height: number;
    acceleration: number;
    velocity: number = 0;
    class: String;
    protected time;
    abstract styleSheet;
    constructor(positionX, positionY, width, height){
        this.time = new Date().getTime();
        this.height = height;
        this.width = width;
        this.positionX = positionX;
        this.positionY = positionY;
    }

    abstract init();

}