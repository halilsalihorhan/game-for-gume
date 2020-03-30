import { Component, OnInit } from '@angular/core';
import { LevelBaseComponent } from '../level-base/level-base.component';
import { Cannon } from './shapes/cannon';
import { Bird } from './shapes/bird';

@Component({
  selector: 'game-level-three',
  templateUrl: './level-three.component.html',
  styleUrls: ['./level-three.component.scss']
})
export class LevelThreeComponent extends LevelBaseComponent {
  bird: Bird
  cannon: Cannon;
  isAlive = true;
  constructor() {
    super();
    this.cannon = new Cannon();
   }
  ngOnInit() {}
  onKey(event) {
    if(event =="w"|| event == "W"|| event == "ArrowUp") this.cannon.increment();
    if(event =="s"|| event == "S" || event == "ArrowDown") this.cannon.decrement();
    if(event == " ") this.cannon.charge();
  }
  fire(event){
    if(event == " "){
    this.bird = new Bird(this.cannon);
    this.cannon.initial = 200;
    setInterval(()=>{
      if(this.bird.y >=5 && this.bird.y<=50 && this.isAlive){ 
        if(this.bird.x >= 56){
          if(this.bird.y >=24 && this.bird.y<=32)
            this.levelUp.emit(1);
        }
        else
         this.bird.move(); 
      }
      else{
        this.isAlive == false;
      }
    },20);
  }
}
}
