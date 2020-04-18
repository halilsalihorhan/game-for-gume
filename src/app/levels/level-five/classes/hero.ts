import { Shape } from './shape';
import { Heart } from './heart';

export class Hero extends Shape {
    isFinalized = false;
    lives = 3;
    styleSheet: any;
    direction = 1;
    shapes: Shape[];
    waters: Shape[];
    hearts: Heart[];
    angle = 0;
    adjust = 0;
    rotation = 1;
    diving = 0;
    constructor(hearts, shapes, waters, positionX, positionY, width, height) {
        super(positionX, positionY, width, height);
        this.hearts = hearts;
        this.shapes = shapes;
        this.waters = waters;
        this.init();

    }
    init() {
        this.styleSheet = {
            position: 'absolute',
            height: this.height + 'vh',
            width: this.width + 'vh',
           // "background-color": "#424242",
            bottom: -this.positionX + 'vh',
            left: this.positionY + 'vh',
            'background-image': 'url("../../../assets/penguin.svg")',
            'background-repeat': 'no-repeat',
            transform: 'rotate(' + this.angle + 'deg) translate(' + this.adjust + 'vh) scale(' + this.rotation + ',1)',
            'z-index': '9'
        };
        if (this.direction !== 0) {
        this.rotation = 1;
      } else {
        this.rotation = -1;
      }
    }

    hurt() {
        this.lives--;
        this.hearts[this.lives].freeze();
    }
    fall() {
        this.acceleration += 0.2;
        this.velocity += this.acceleration;
        this.velocity = Math.floor(this.velocity);
        if (this.velocity > 1) {
        this.velocity = 1;
      }

    }
    lift() {
      this.acceleration -= 0.1;
      this.velocity += this.acceleration;
      this.velocity = Math.ceil(this.velocity * 10) / 10;

    }
    jump() {
       const a =  setInterval(() => {
            if (!this.heroCanFall()) {
              if (this.positionX < 85 || this.positionX >= 165) {
                this.velocity = -5;
              }
            }
            clearInterval(a);
        });

    }
    stop() {
        this.acceleration = 0;
        this.velocity = 0;
    }
    dive() {
        this.diving = 1;
        setTimeout(() => {
          this.diving = 0;
        }, 500);
        const a =  setInterval(() => {
          if (this.heroCanSwim()) {
            this.velocity = 1;
          }
          clearInterval(a);
        });

    }
  swim() {
      this.diving = 0;
    if (this.heroCanSwim()) {
      this.angle = this.angle;
      this.positionX -= 2;
    }
  }

    move() {
      console.log(this.heroCanSwim(), this.heroCanFall(), this.velocity);
      this.positionX += this.velocity;
      if (this.heroCanSwim()) {
        if (this.direction === 0) {
          if (this.diving === 0) {
            this.angle = -50;
          } else {
            this.angle = -120;
          }
          this.adjust = -6;
        } else {
          if (this.diving === 0) {
            this.angle = 50;
          } else {
            this.angle = 120;
          }
          this.adjust = 6;
        }
        if (this.velocity < 0) {
            this.diving = 0;
        }
        if (this.velocity > 0) {
          this.stop();
        }
        this.lift();
        } else {
        if (this.positionX < 85 || this.positionX >= 165) {
          this.angle = 0;
          this.adjust = 0;
          this.diving = 0;
        }
      }
      if (this.heroCanFall()) {
        this.fall();
        } else {
          this.stop();
        }

      this.init();

    }
    forward() {
        this.direction = 1;
        if (this.heroCanForward()) {
            this.positionY += 1;
        }
    }
    backward() {
        this.direction = 0;
        if (this.heroCanBackward()) {
            this.positionY -= 1;
        }
    }
    heroCanFall(): boolean {
        let result = true;
        this.shapes.forEach((shape, index) => {
            if (index !== 0) {
                if (shape.positionX - this.positionX === shape.height) {
                    if (shape.positionY - this.positionY <= this.width) {
                        if (shape.positionY + shape.width - this.positionY >= 0) {
                            result =  false;
                    }
                        }
                }
            }

        });
        return result;
    }

    heroCanForward(): boolean {
        let result = true;
        this.shapes.forEach((shape, index) => {
            if (index !== 0) {
                if (shape.positionY - this.positionY === this.width) {
                    if (shape.positionX >= this.positionX) {
                        if (shape.positionX - shape.height <= this.positionX) {
                            result =  false;
                }
                    }
                        }
            }

        });
        return result;
    }
    heroCanDive(): boolean {
      return true;
    }

    heroCanBackward(): boolean {
        let result = true;
        this.shapes.forEach((shape, index) => {
            if (index !== 0) {
                if (this.positionY - shape.positionY === shape.width) {
                    if (shape.positionX >= this.positionX) {
                        if (shape.positionX - shape.height <= this.positionX) {
                             result =  false;
                }
                    }
                        }
            }

        });
        return result;
    }

    final() {
      this.move = () => {
        this.positionX += this.velocity;
        if (this.heroCanFall()) {
          this.fall();
        } else {
          this.stop();
        }

        this.init();

      };
        const interval = setInterval(() => {
            if (this.angle !== 90) {
                this.angle++;
                this.adjust += 2 / 90;
                if (this.angle % 18 === 0) { this.forward(); }
            } else {
                this.forward();
                if (!this.heroCanForward()) {
                  clearInterval(interval);
                  this.isFinalized = true;
                }
            }


        }, 1);
    }
    heroCanSwim(): boolean {
      let result = false;
      this.waters.forEach((water, index) => {
        if (-this.positionX + water.positionX < water.height && water.positionX > this.positionX) {
          result = true;
        }
      });
      return result;
    }
    rotate(a: number) {

    }
}
