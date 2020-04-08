export class Letter {
  content: string;
  opacity = 0;
  constructor(letter: string) {
    this.content = letter;
  }
  init() {
    const interval = setInterval(() => {
        this.opacity++;
    }, 10);
  }

}
