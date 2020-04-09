import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Line} from './classes/Line';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  @Input() texts: string[];
  @Output() Return: EventEmitter<number> = new EventEmitter();
  lines: Line[] = [new Line(), new Line()];
  textCount = 0;
  hasNextButton = false;
  buttonText = 'Next...';

  constructor() { }

  ngOnInit() {
    this.init();
  }


  init() {
    this.lines[0].add(' ');
    let letterCount: number;
    letterCount = 0;
    let pointer: number;
    pointer = 1;
    const interval = setInterval(() => {
      this.lines[pointer].add(this.texts[this.textCount].charAt(letterCount));
      if (letterCount === this.texts[this.textCount].length) {
        this.hasNextButton = true;
        clearInterval(interval);
      }
      letterCount++;
      if (letterCount % 30 === 0) {
        this.lines.push(new Line());
        pointer++;
        if (pointer === 18) {
          clearInterval(interval);
        }
      }

    }, 50);
  }
  nextText() {
    this.lines = [new Line(), new Line()];
    this.textCount++;
    if (this.texts.length === this.textCount) {

      this.Return.emit(1);
    }
    if (this.texts.length === this.textCount + 1) {
      this.buttonText = ' LET\'S PLAY';
    }
    this.hasNextButton = false;
    this.init();
  }

}
