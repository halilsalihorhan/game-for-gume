import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  audio = new Audio('./assets/remembrance.mp3');

  constructor() { }

  @HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'p') {
      this.audio.play();
    }
    if (event.key === 'o') {
      this.audio.pause();
    }

  }
  ngOnInit() {
    this.audio.load();
  }

}
