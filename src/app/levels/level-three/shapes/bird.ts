import { Cannon } from './cannon';

export class Bird {
    x = 0;
    y = 0;
    velocityX = 0;
    velocityY = 0;
    gravity = 3;
   private time;
   constructor(cannon: Cannon) {
       this.y = -100 + cannon.height* Math.cos(cannon.rotation*Math.PI/180);
       this.x = cannon.height* Math.sin(cannon.rotation*Math.PI/180);
       this.velocityX = cannon.initial*Math.sin(cannon.rotation*Math.PI/180);
       this.velocityY = cannon.initial* Math.cos(cannon.rotation*Math.PI/180);
       this.time = new Date().getTime();
   }

  
   move(){
       var deltaTime = new Date().getTime() -this.time;
       this.time = new Date().getTime();
       this.velocityY -= this.gravity* deltaTime;
       this.y += this.velocityY*deltaTime/10000;
       this.x += this.velocityX*deltaTime/10000;
       
   }
   start(){
       this.time = new Date().getTime();
   }
 }
 