import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LevelBaseComponent} from './../level-base/level-base.component';

@Component({
  selector: 'game-level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.scss']
})
export class LevelOneComponent extends LevelBaseComponent {
//  @Output() levelUp: EventEmitter<number> = new EventEmitter();
  map: number[][] = [
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 3],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
  pointer = {x: 0, y: 1}
  constructor() {
    super()
   }

  ngOnInit() {
    this.help.emit(1);
  }

  onKey(key: any){

    if(key == "ArrowDown" || key == "S" || key == "s") this.pointerMove(1, 0);
    if(key == "ArrowUp" || key == "W" || key == "w") this.pointerMove(-1, 0);
    if(key == "ArrowLeft" || key == "A" || key == "a") this.pointerMove(0, -1);
    if(key == "ArrowRight" || key == "D" || key == "d") this.pointerMove(0, 1);

  }

  pointerMove(a, b){

     var X = this.pointer.x + a;
     var Y = this.pointer.y + b;
     if(this.map[X][Y] == 3) this.levelUp.emit(1);
    if(this.map[X][Y] == 0 || this.map[X][Y] == 3){
      this.map[this.pointer.x][this.pointer.y] = 0;
      this.map[X][Y] = 2;
      this.pointer.x = X;
      this.pointer.y = Y;
    }

  }


}
