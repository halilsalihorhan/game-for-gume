import {Letter} from './Letter';
export class Line {
  maxLength = 50;
  content: Letter[] = [];
  constructor() {
  }
  add(letter: string) {
    const temp = new Letter(letter);
    temp.init();
    this.content.push(temp);
  }
}
