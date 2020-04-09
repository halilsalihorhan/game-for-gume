export class Letter {
  content: string;
  opacity = 0;
  constructor(letter: string) {
    this.content = letter;
  }
  init() {
    const interval = setInterval(() => {
      if (this.opacity === 100) { clearInterval(interval); }
      this.opacity++;
    }, 10);
  }

}
