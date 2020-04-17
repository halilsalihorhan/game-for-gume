export class Snow {
  top = 18;
  style = {
    position: 'absolute',
    width: '2vh',
    opacity: '60%',
    top: '0vh',
    left: '0vh'
  };
  constructor(left: number) {
    this.style.left = 2 + left + Math.random() * 23 + 'vh';
  }
}
