import { Component, OnInit } from '@angular/core';
import { LevelBaseComponent } from '../level-base/level-base.component';

@Component({
  selector: 'game-level-four',
  templateUrl: './level-four.component.html',
  styleUrls: ['./level-four.component.scss']
})
export class LevelFourComponent extends LevelBaseComponent{

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
