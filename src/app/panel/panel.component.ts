import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'appendex-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() level: number;
  constructor() { }

  ngOnInit() {
  }

}
