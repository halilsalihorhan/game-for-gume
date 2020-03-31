import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Output() Level: EventEmitter<number> = new EventEmitter();
  level = 4;
  constructor() { }

  ngOnInit() {
  }
  levelUp(){
    this.level++;
    this.Level.emit(this.level);
  }

}
