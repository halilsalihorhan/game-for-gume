import { Component, OnInit, HostListener } from '@angular/core';
import { LevelBaseComponent } from '../level-base/level-base.component';
import { Shape } from './classes/shape';
import { View } from './classes/view';
import { Map } from './classes/map';
import { Block } from './classes/block';
import { Hero } from './classes/hero';
import { Heart } from './classes/heart';
import { Water } from './classes/water';
import { Igloo } from './classes/igloo';


@Component({
  selector: 'game-level-five',
  templateUrl: './level-five.component.html',
  styleUrls: ['./level-five.component.scss']
})
export class LevelFiveComponent extends LevelBaseComponent {
  constructor() {
    super();
    this.view = new View();
    this.mapify();
    this.map = new Map(this.shapes, 200, 200);
    this.hearts.push(new Heart(10, 32, 5, 5)); // #frame
    this.hearts.push(new Heart(10, 40, 5, 5)); // #frame
    this.hearts.push(new Heart(10, 48, 5, 5)); // #frame
   }
  key = {
    d: false,
    w: false,
    a: false,
    s: false,
    ' ': false,
    ArrowLeft: false,
    ArrowRight: false,
    A: false,
    D: false,
    W: false,
    S: false
  };
  hearts: Heart[] = [];
  view: View;
  map: Map;
  shapes: Shape[] = [];
  waters: Shape[] = [];
  viewX = 0;
  viewY = 0;
  @HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.key[event.key] = true;
  }
  @HostListener('window:keyup', ['$event'])
  keEvent(event: KeyboardEvent) {
    this.key[event.key] = false;
  }
  @HostListener('window:keydown', ['$event'])
  kEvent(event: KeyboardEvent) {
   /* if (!this.map.finalized) {
      if (event.key === 'ArrowRight') { this.right(); }
      if (event.key === 'ArrowLeft') { this.left(); }
      if (event.key === 'ArrowUp') { this.up(); }
      if (event.key === 'ArrowDown') { this.down(); }
    }*/

  }

  joystick() {
    setInterval(() => {
      if (!this.map.finalized) {

      if (this.key.a || this.key.A || this.key.ArrowLeft) { (this.shapes[0] as Hero).backward(); }
      if (this.key.d || this.key.D || this.key.ArrowRight) { (this.shapes[0] as Hero).forward(); }
      if (this.key.s || this.key.S) { (this.shapes[0] as Hero).dive(); }
      if (this.key.w || this.key.W) { (this.shapes[0] as Hero).swim(); }
      if (this.key[' ']) { (this.shapes[0] as Hero).jump(); }
      }




    }, 20);
  }
  setCamera() {
    setInterval(() => {
      if ((this.shapes[0] as Hero).positionX > 60 && (this.shapes[0] as Hero).positionX <= 80) {
        if (this.viewX < 40) {
          this.viewX++;
        } else if (this.viewX > 40) {
          this.viewX--;
        }
        if (this.key.a || this.key.A || this.key.ArrowLeft) { this.left(); }
        if (this.key.d || this.key.D || this.key.ArrowRight) { this.right(); }
      } else {
          if ((this.shapes[0] as Hero).heroCanSwim()) {
            this.viewX = (this.shapes[0] as Hero).positionX - 30;
            if ((this.shapes[0] as Hero).positionY - 30 > 0 && (this.shapes[0] as Hero).positionY - 30 < this.map.width - this.view.width) {
              this.viewY = (this.shapes[0] as Hero).positionY - 30;
            }
          } else {
            {
            }
            if ((this.shapes[0] as Hero).positionX > 130) {
              if (this.viewX < 140) {
                this.viewX++;
              } else if (this.viewX > 140) {
                this.viewX--;
              }
              if ((this.shapes[0] as Hero).positionY - 30 > 0 && (this.shapes[0] as Hero).positionY - 30 < this.map.width - this.view.width) {
                this.viewY = (this.shapes[0] as Hero).positionY - 30;
               }
          }
          }
      }
    });
  }
  mapify() {
    this.shapes.push(new Hero(this.hearts, this.shapes, this.waters, 20, 12, 5, 8.4)); // #0
    this.shapes.push(new Igloo(196, 165, 25, 25));
    this.shapes.push(new Block(200, 0, 5, 210)); // #frame
    this.shapes.push(new Block(200, 0, 200, 5)); // #frame
    this.shapes.push(new Block(200, 195, 5, 200)); // #frame
    this.shapes.push(new Block(25, 0, 20, 5)); // #frame
    this.shapes.push(new Block(25, 0, 20, 5)); // #1
    this.shapes.push(new Block(40, 25, 25, 5)); // #2
    this.shapes.push(new Block(55, 50, 5, 55)); // #3
    this.shapes.push(new Block(55, 55, 5, 55)); // #3
    this.shapes.push(new Block(55, 60, 5, 55)); // #3
    this.shapes.push(new Block(55, 65, 5, 55)); // #3
    this.shapes.push(new Block(55, 70, 5, 55)); // #3
    this.shapes.push(new Block(55, 75, 5, 55)); // #3
    this.shapes.push(new Block(55, 80, 5, 55)); // #3
    this.shapes.push(new Block(55, 85, 5, 55)); // #3
    this.shapes.push(new Block(55, 90, 5, 55)); // #3
    this.shapes.push(new Block(55, 95, 5, 55)); // #3
    this.shapes.push(new Block(55, 100, 5, 55)); // #3
    this.shapes.push(new Block(55, 105, 5, 55)); // #3
    this.shapes.push(new Block(55, 110, 5, 55)); // #3
    this.shapes.push(new Block(55, 115, 5, 55)); // #3
    this.shapes.push(new Block(55, 120, 5, 55)); // #3
    this.shapes.push(new Block(55, 125, 5, 55)); // #3
    this.shapes.push(new Block(55, 130, 5, 55)); // #3
    this.shapes.push(new Block(55, 135, 5, 55)); // #3
    this.shapes.push(new Block(55, 140, 5, 55)); // #3
    this.shapes.push(new Block(55, 145, 5, 55)); // #3
    this.shapes.push(new Block(55, 150, 5, 55)); // #3
    this.shapes.push(new Block(55, 155, 5, 55)); // #3
    this.shapes.push(new Block(55, 160, 5, 55)); // #3
    this.shapes.push(new Block(55, 165, 5, 55)); // #3
    this.shapes.push(new Block(55, 170, 5, 55)); // #3
    this.shapes.push(new Block(55, 175, 5, 55)); // #3
    this.shapes.push(new Block(55, 180, 5, 55)); // #3
    this.shapes.push(new Block(55, 185, 5, 55)); // #3
    this.shapes.push(new Block(55, 190, 5, 55)); // #3
    this.shapes.push(new Block(55, 195, 5, 55)); // #3
    this.shapes.push(new Block(55, 200, 5, 55)); // #3
    this.shapes.push(new Block(55, 0, 35, 5)); // #4
    this.shapes.push(new Block(85, 0, 100, 5)); // #5
    this.shapes.push(new Block(90, 0, 60, 5)); // #6
    this.shapes.push(new Block(95, 0, 55, 5)); // #7
    this.shapes.push(new Block(100, 0, 50, 5)); // #8
    this.shapes.push(new Block(105, 0, 45, 5)); // #9
    this.shapes.push(new Block(130, 0, 60, 5)); // #5
    this.shapes.push(new Block(125, 0, 60, 5)); // #6
    this.shapes.push(new Block(120, 0, 55, 5)); // #7
    this.shapes.push(new Block(115, 0, 50, 5)); // #8
    this.shapes.push(new Block(110, 0, 45, 5)); // #9
    this.shapes.push(new Block(155, 45, 150, 5)); //
    this.shapes.push(new Block(160, 35, 165, 5)); //
    this.shapes.push(new Block(165, 15, 180, 5)); //
    this.waters.push(new Water(85, 100, 200, 3));
    this.waters.push(new Water(90, 60, 200, 5));
    this.waters.push(new Water(95, 55, 200, 5));
    this.waters.push(new Water(100, 50, 200, 5));
    this.waters.push(new Water(105, 45, 200, 5));
    this.waters.push(new Water(110, 45, 200, 5));
    this.waters.push(new Water(115, 50, 200, 5));
    this.waters.push(new Water(120, 55, 200, 5));
    this.waters.push(new Water(125, 60, 200, 5));
    this.waters.push(new Water(130, 60, 200, 5));
    this.waters.push(new Water(135, 0, 200, 5));
    this.waters.push(new Water(140, 0, 200, 5));
    this.waters.push(new Water(145, 0, 200, 5));
    this.waters.push(new Water(150, 0, 200, 5));
    this.waters.push(new Water(155, 0, 45, 5));
    this.waters.push(new Water(160, 0, 35, 5));
    this.waters.push(new Water(165, 0, 15, 5));
    this.shapes.push(new Block(80, 5, 5, 25));
    this.shapes.push(new Block(80, 10, 5, 25));

  }
  ngOnInit() {
    this.help.emit(1);
    this.joystick();
    this.detectFinal();
    this.setCamera();
  }
  detectFinal() {
    const interval = setInterval(() => {
      if ((this.shapes[0] as Hero).isFinalized) {
        this.levelUp.emit(1);
        clearInterval(interval);
      }
    }, 1000);

  }
  down() {
    if (this.viewX < this.map.height - this.view.height) {
      this.viewX += 2;
    }
  }
  up() {
    if (this.viewX > 0) {
      this.viewX -= 2;
    }
  }
  left() {
    if (this.viewY > 0) {
    this.viewY -= 0.5;
    }
  }
  right() {
  //  (<Hero>this.shapes[0]).final();
    if (this.viewY < this.map.width - this.view.width) {
      this.viewY += 0.5;
    }
  }
}
