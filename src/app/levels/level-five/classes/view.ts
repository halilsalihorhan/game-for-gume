export class View{
    width: number = 60;
    height: number = 60;

    styleSheet = {
        "position": "relative",
        "width": this.width + "vh",
        "height": this.height + "vh",
        "background-color": "#fff",
        "z-index": "9",
       // "overflow" : "hidden"
    }
    constructor(){

    }
}
