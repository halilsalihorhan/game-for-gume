import { Shape } from './shape';

export class Heart extends Shape {
    styleSheet: any;
    init() {
        this.styleSheet = {
            "position": "absolute",
            "height": this.height + "vh",
            "width": this.width + "vh",
            "bottom": -this.positionX + "vh",
            "left": this.positionY + "vh",
            "background-image": 'url("../../../assets/heart.svg")',
            "z-index":"999999",
            
        }
    }
    constructor(positionX, positionY, width, height) {
        super(positionX,positionY, width, height);
        this.init();
    }
    freeze(){
        this.styleSheet["background-image"] = 'url("../../../assets/heart-ice.svg")';
        this.styleSheet["opacity"] = '60\%';
    }

}