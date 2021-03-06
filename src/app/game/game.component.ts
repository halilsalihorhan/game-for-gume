import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Output() Level: EventEmitter<number> = new EventEmitter();
  @Output() Help: EventEmitter<number> = new EventEmitter<number>();
  @Input() level: number;
  constructor() { }

  ngOnInit() {
  }
  levelUp() {
    this.level++;
    this.Level.emit(this.level);
  }
  help() {
    this.Help.emit(1);
  }

}
