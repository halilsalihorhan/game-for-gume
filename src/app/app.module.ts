import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LevelsModule} from './levels/levels.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { GameComponent } from './game/game.component';
import { IntroComponent } from './intro/intro.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LevelsMenuComponent } from './levels-menu/levels-menu.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { MusicComponent } from './music/music.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    GameComponent,
    IntroComponent,
    WelcomeComponent,
    LevelsMenuComponent,
    CelebrationComponent,
    MusicComponent,
   
  ],
  imports: [
    BrowserModule,
    LevelsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
