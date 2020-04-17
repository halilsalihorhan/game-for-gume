import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Letter} from './Classes/Letter';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {
  @Output() Menu: EventEmitter<number> = new EventEmitter();
  @Input() credits: boolean;
  levelsMenu = false;
  text1 = 'Game';
  text2 = 'For';
  text3 = 'Gume';
  proposition = 100;
  textPosition = 'absolute';
  opacity = 100;
  speed = 300;
  TEXT_ONE: Letter[] = [new Letter('.')];
  TEXT_TWO: Letter[] = [new Letter('.')];
  TEXT_THREE: Letter[] = [new Letter('.')];
  intervals = [];
  scroll = 0;
  constructor() {
  }
  ngOnDestroy(): void {
    this.intervals.forEach((interval) => {
      clearInterval(interval);
    });
  }

  ngOnInit() {
    if (this.credits) {
      this.credit();
    }
    let timer: number;
    timer = 0;
    const intervalTheFirst = setInterval(() => {
      if (timer === this.text1.length + this.text2.length + this.text3.length) {
        clearInterval(intervalTheFirst);
        this.minimizeText();
      }
      if (timer < this.text1.length) {
        const temp = new Letter(this.text1.charAt(timer));
        temp.init();
        this.TEXT_ONE.push(temp);
      } else if (timer < this.text1.length + this.text2.length) {
        const temp = new Letter(this.text2.charAt(timer - this.text1.length));
        temp.init();
        this.TEXT_TWO.push(temp);
      } else if (timer < this.text1.length + this.text2.length + this.text3.length) {
        const temp = new Letter(this.text3.charAt(timer - this.text1.length - this.text2.length));
        temp.init();
        this.TEXT_THREE.push(temp);
      }
      timer++;
    }, this.speed);
  }
  minimizeText() {
    let timer: number;
    timer = 0;
    const interval = setInterval(() => {
      if (timer === 60) {
        this.textPosition = 'unset';
        clearInterval(interval);
      } else {
        this.opacity = this.opacity - 0.15;
        this.proposition--;
        timer++;
      }
    }, 1);
}
play() {
   this.Menu.emit(0);

}
levels(level: number) {
    this.Menu.emit(level);
}
credit() {
    this.credits = true;
    this.scroll = 50;
    this.intervals.push(setInterval(() => {
      this.scroll -= 0.1;
      if (this.scroll < -225) {
        this.ngOnDestroy();
      }
    }, 10));
}
return() {
    this.ngOnDestroy();
    this.credits = false;
}
}
