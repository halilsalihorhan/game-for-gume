import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Snow} from './Classes/Snow';

@Component({
  selector: 'app-celebration',
  templateUrl: './celebration.component.html',
  styleUrls: ['./celebration.component.scss']
})
export class CelebrationComponent implements OnInit, OnDestroy {
  @Output() end: EventEmitter<number> = new EventEmitter<number>();
  hero = 0;
  snows: Snow[] = [];
  intervals = [];
  scene = 10;
  snowed = 10;
  melted = 0;
  time = 0;
  shade = 0;
  bolt = {
    exists: false,
    top: 10,
    interval: null,
    invert: false,
    timer: 0
  };
  simurgh = {
    time: 0,
    bottom: 12,
    flapped: false,
    flap: () => {
      this.simurgh.flapped = !this.simurgh.flapped;
    },
    init: () => {
      this.intervals.push(setInterval(() => {
        this.simurgh.flap();
        this.simurgh.bottom = 3 * Math.sin(this.simurgh.time / 15);
        this.simurgh.time++;
      }, 200));
    }
  };
  dialogOfHero = -1;
  dialogOfCamel = 0;
  dialogsOfHero = {
    0: 'Where am I'
  };

  dialog = {
    mark: 0,
    visible: false,
    content : {
      0: 'Ohh....',
      1: 'How did you get this formation?',
      2: 'I see...',
      3: 'You are cursed, right?',
      4: 'Indeed, I can remove it.',
      5: 'HsayaN...',
      6: '...indeBaa...',
      7: '...pleptet',
      8: 'My Majesté',
      9: 'Here you are',
      10: 'My Simurgh',
      11: 'As you know, your kind, Phoenixes, is born again from its ashes',
      12: 'So... Actually today is your birthday',
      13: 'Happy Birthday, My Simurgh,',
      14: 'Happy Birthday, My Majesté'

    },
    next: () => {
      this.dialog.mark++;
      if (this.dialog.mark === 7) {
        this.lightning();
      }
      if (this.dialog.mark === 14) {
        this.curtainsOff();
      }
    },
    init: () => {
      this.dialog.visible = true;
    }
  };
  constructor() { }
  ngOnDestroy() {
    this.intervals.forEach(interval => clearInterval(interval));
    this.intervals = [];
  }

  ngOnInit() {
    this.shrink();
  }
  absurd() {
    this.intervals.push(setInterval(() => {
      if (this.scene < 60) {
        this.scene += 0.1;
      }
      this.time += 0.01;
      if (this.time < 9) {
        this.snowed += 0.002;
        this.melted += 0.05;
      } else
      if (this.time < 15) {
        this.melted += 0.02;
        this.snowed -= 0.01;
      } else {
        this.dialog.init();
        clearInterval(this.intervals[2]);
      }
    }));
  }
  shrink() {
    this.intervals.push(setInterval(() => {
      if (this.shade > 10) {
        clearInterval(this.intervals[0]);
        this.snow();
        this.absurd();
      }
      this.shade += 0.05;
      })
    );
  }
  lightning() {
    this.bolt.exists = true;
    this.bolt.interval = setInterval(() => {
      if (this.bolt.top < 20) {
        this.bolt.top += 0.1;
      } else {
        this.bolt.invert = !this.bolt.invert;
        this.bolt.timer++;
        if (this.bolt.timer > 201) {
          this.hero = 1;
          clearInterval(this.bolt.interval);
          this.ngOnDestroy();
          this.simurgh.init();
        }
      }
    }, 2);


  }
  snow() {
    this.intervals.push(setInterval(() => {
      if (Math.random() * 10 > 8) {
        this.snows.push(new Snow(this.scene));
      }
      this.snows.forEach(snow => {
        snow.top += 0.5;
        snow.style.top = `${snow.top}vh`;
      });
      if (this.snows.length % 15 === 0) {
        this.snows.reverse();
        this.snows.pop();
        this.snows.reverse();
      }
    }, 20));
  }
  click() {
    if (this.dialog.visible) {
      this.dialog.next();
    }
  }
  curtainsOff() {
    this.intervals.push(setInterval(() => {
        if (this.shade > 50) {
          this.ngOnDestroy();
          this.end.emit(1);
        }
        this.shade += 0.05;
      })
    );
  }
}
