import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelOneComponent } from './level-one/level-one.component';
import { LevelBaseComponent } from './level-base/level-base.component';
import { LevelTwoComponent } from './level-two/level-two.component';
import { LevelThreeComponent } from './level-three/level-three.component';
import { LevelFourComponent } from './level-four/level-four.component';



@NgModule({
  declarations: [LevelOneComponent, LevelBaseComponent, LevelTwoComponent, LevelThreeComponent, LevelFourComponent],
  imports: [
    CommonModule
  ],
  exports:[LevelOneComponent, LevelBaseComponent, LevelTwoComponent, LevelThreeComponent, LevelFourComponent]
})
export class LevelsModule { }
