import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'game-for-gume';
  LEVEL = 1;


  level(a: number){
    this.LEVEL = a;
  }
}
