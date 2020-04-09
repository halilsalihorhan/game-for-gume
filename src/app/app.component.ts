import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'game-for-gume';
  LEVEL = 1;
  isIntroduced = false;
  welcomeOpacity = 100;
  AreYouWelcome = false;
  texts: string[][] = [[
    'Hey. There is something just   here. Can you look at this   please.',
    'I did say to you. Hey do you  listen me???'],
    [
      'Hey. There is something just   here. Can you look at this   please.',
      'I did say to you. Hey do you  listen me???'],
      [
      'Hey. There is something just   here. Can you look at this   please.',
        'I did say to you. Hey do you  listen me???'],
    [
      'Hey. There is something just   here. Can you look at this   please.',
      'I did say to you. Hey do you  listen me???'],
    [
      'Hey. There is something just   here. Can you look at this   please.',
      'I did say to you. Hey do you  listen me???'],
    [
      'Hey. There is something just   here. Can you look at this   please.',
      'I did say to you. Hey do you  listen me???']];

  level(a: number) {
    this.isIntroduced = false;
    this.LEVEL = a;
  }

  menuClick(lever: number) {
    if (lever === 0) {
      this.play();
    } else if (lever === 1) {
      this.levels();
    }
  }
  levels() {
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
  begin() {
    this.isIntroduced = true;
  }
}
