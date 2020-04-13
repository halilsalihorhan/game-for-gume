import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-level-base',
  templateUrl: './level-base.component.html',
  styleUrls: ['./level-base.component.scss']
})
export class LevelBaseComponent implements OnInit {
  @Output() levelUp: EventEmitter<number> = new EventEmitter();
  @Output() help: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

}
