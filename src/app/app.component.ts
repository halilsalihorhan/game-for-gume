import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'game-for-gume';
  LEVEL = 5;
  gameWidth = 300;
  edges = false;
  isIntroduced = true;
  welcomeOpacity = 100;
  AreYouWelcome = true;
  menuToggle = false;
  balloon = false;
  isCelebration = false;
  balloonTexts = {
    1: 'Press W, A, S, D keys to move...',
    2: 'Hold W or S to angle the cannon, space to fire!',
    3: 'Press R to restart',
    4: 'Feel the snow'
  };
  texts: string[][] = [[],
    [
      'Hey Simurgh...                  Is that you? ',
      'We all miss,                    Where were you?'],
      [
      'Ohh...                          You found the exit.',
        'Now it is time to FLY!'],
    [
      'Fly...                           Fly...                        Fly...',
      'Please, do not hit anything.     OK?'],
    [
      'Wait what?                       Snow',
      ' How can you fly,                while snowing?'],
    [
      'What is this place?',
      'You must transform              to continue',
      '(folding)                        (folding)                     (folding)',
      'At least,                       you are still a bird']];
  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    if (event.key === 'r' || event.key === 'R') {
      this.balloon = false;
      const temp = this.LEVEL;
      this.LEVEL = 0;
      const timeout = setTimeout(() => {
        this.LEVEL = temp;
      }, 1);
      console.log(this.LEVEL);
    }
  }



  level(a: number) {
    if (a === 6) {
      this.AreYouWelcome = true;
      this.isIntroduced = true;
      this.isCelebration = true;
    }
    this.isIntroduced = false;
    this.balloon = false;
    this.LEVEL = a;
  }

  menuClick(lever: number) {
    if (lever === 0) {
      this.play();
    } else if (lever > 0) {
      this.LEVEL = lever;
      this.play();
    }
  }
  levels() {

  }
  play() {
    this.isCelebration = false;
    let timer: number;
    timer = 0;
    const interval = setInterval(() => {
      if (timer !== 100) {
        this.welcomeOpacity--;
        timer++;
      } else {
        clearInterval(interval);
        this.AreYouWelcome = true;
      }

    }, 1);
  }
  begin() {
    this.isIntroduced = true;
  }
  switch() {
    this.balloon = false;
    if (this.gameWidth === 300) {

      const interval = setInterval(() => {
        this.gameWidth--;
        if (this.gameWidth === 60) {
          this.menuToggle = true;
          clearInterval(interval);
        }
      });
    } else if (this.gameWidth === 60) {


      const interval = setInterval(() => {
        this.menuToggle = false;
        this.gameWidth++;
        if (this.gameWidth === 300) {
          clearInterval(interval);
        }
      });
    }
  }
  mainMenu() {
    this.edges = false;
    this.AreYouWelcome = false;
    this.isIntroduced = false;
    this.LEVEL = 1;
    this.gameWidth = 300;
    this.welcomeOpacity = 100;
    this.menuToggle = false;
  }
  restart() {
    this.isIntroduced = false;
    this.gameWidth = 300;
    this.welcomeOpacity = 100;
    this.menuToggle = false;
  }
  pop() {
    this.balloon = this.balloon !== true;
  }
  credits() {
    this.edges = true;
    this.AreYouWelcome = false;
    this.isIntroduced = false;
    this.LEVEL = 1;
    this.gameWidth = 300;
    this.welcomeOpacity = 100;
    this.menuToggle = false;
  }
}
