import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LevelsModule} from './levels/levels.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    GameComponent,
   
  ],
  imports: [
    BrowserModule,
    LevelsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
