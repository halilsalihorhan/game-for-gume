import { Shape } from './shape';

export class Water extends Shape{


    styleSheet: any;


    constructor(positionX, positionY, width, height) {
        super(positionX, positionY, width, height);
        this.init();

    }
    init() {
        this.styleSheet = {
            "position": "absolute",
            "height": this.height + "vh",
            "width": this.width + "vh",
           // "background-color": "#424242",
            "bottom": -this.positionX + "vh",
            "left": this.positionY + "vh",
            "background-color": "rgba(6, 33, 66, 0.56)" ,
        }
    }

}
