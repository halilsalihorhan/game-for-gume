import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'game-for-gume';
  LEVEL = 0;
  isIntroduced = true;
  welcomeOpacity = 100;
  AreYouWelcome = false;

  level(a: number) {
    this.LEVEL = a;
  }
  play() {
    let timer: number;
    timer = 0;
    const interval = setInterval(() => {
      if (timer !== 100) {
        this.welcomeOpacity--;
        timer++;
      } else {
        this.AreYouWelcome = true;
      }

    }, 1);
  }
}
