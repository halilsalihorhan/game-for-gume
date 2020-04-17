import { View } from './view';
import { Shape } from './shape';
import { Hero } from './hero';

export class Map {
    width = 100;
    height = 100;
    styleSheet: any;
    shapes: Shape[];
    finalized = false;
    opacity = 100;
    constructor(shapes: Shape[], width: number, height: number) {
        this.width = width;
        this.height = height;
        this.shapes = shapes;
        this.init();
        this.gravity();
    }
    init() {
        this.styleSheet = {
            position: 'absolute',
            width: this.width + 'vh',
            height: this.height + 'vh',
            'background-image': 'url("../../../assets/brick-wall-background.svg")',
            'background-blend-mode': 'difference',
            'background-color': 'rgb(161, 149, 255)',
            'z-index': '99',
            opacity: this.opacity + '%'
        };
    }

    gravity() {
        setInterval(() => {
                (this.shapes[0] as Hero).move();

                if ((this.shapes[0] as Hero).positionX > 190) {
                    if ((this.shapes[0] as Hero).positionY > 145) {
                        if (!this.finalized) {
                            this.finalized = true;
                            (this.shapes[0] as Hero).final();
                            const interval = setInterval(() => {
                                if (this.opacity === 60) { clearInterval(interval); }
                                this.opacity--;
                                this.init();
                            });
                        }
                    }
                }



        }, 20);

    }

}
