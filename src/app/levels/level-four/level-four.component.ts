import { Component, OnInit } from '@angular/core';
import { LevelBaseComponent } from '../level-base/level-base.component';
import { Fish } from './shapes/fish';
import { Swan } from './shapes/swan';
import { Gate } from './shapes/gate';
import { Snow } from './shapes/snow';

@Component({
  selector: 'game-level-four',
  templateUrl: './level-four.component.html',
  styleUrls: ['./level-four.component.scss']
})
export class LevelFourComponent extends LevelBaseComponent{
  fish: Fish;
  swan: Swan;
  gate: Gate;
  snows: Snow[] = [];
  score = 0;
  constructor() {
    super();
    this.fish = new Fish();
    this.gate = new Gate();
    this.swan = new Swan(this.gate, this.levelUp);
   }

  ngOnInit() {
    this.fish.init();
    setInterval(()=>{
      let snow = new Snow(this.swan)
      this.snows = this.snows.concat(snow);
      snow.init();
    },2000);
  }

  keypress(key) {
    if(key == "ArrowDown" || key == "S" || key == "s") 0;
    if(key == "ArrowUp" || key == "W" || key == "w") 0;
    if(key == "ArrowLeft" || key == "A" || key == "a") this.swan.move(1);
    if(key == "ArrowRight" || key == "D" || key == "d") this.swan.move(0);
  }

  openGate(){
    this.swan.isBlocked = false;
    this.gate.open();
  }
}
