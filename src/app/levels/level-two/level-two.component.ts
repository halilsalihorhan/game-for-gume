import { Component} from '@angular/core';
import { LevelBaseComponent } from '../level-base/level-base.component';
import { Bird } from './shapes/bird';
import { Pipe } from './shapes/pipe';
@Component({
  selector: 'game-level-two',
  templateUrl: './level-two.component.html',
  styleUrls: ['./level-two.component.scss']
})
export class LevelTwoComponent extends LevelBaseComponent {
  bird: Bird;
  pipes: Pipe[] = [];
  delay = 0;
  isAlive = true;
  score = 0;
  constructor() {
    super();
    this.bird = new Bird();
   }

   ngOnInit(){
     
    setInterval(()=>{
      if(this.bird.y>=5&&this.bird.y<=50&& this.isAlive){
        this.delay++;
        if(this.delay==70||this.pipes.length>=10){
          this.delay = 0;
          if(this.pipes.length<=8)
            this.pipes.push(new Pipe(0));
          else 
            this.pipes.push(new Pipe(1));
        }
         this.bird.move(0.16);
         this.pipes.forEach(pipe=>{
           if(pipe.position == this.bird.x){
              
            if(this.bird.y <= pipe.height || this.bird.y  >= pipe.interval +pipe.height )
                this.isAlive = false;
            else{
              this.score++;
              if(this.score == 35) this.levelUp.emit(1);
            }
              
           }
           pipe.move()
         })
      }
      else{
        this.isAlive == false;
      }
     

    },20);

   }

    onKey(event){
      if(event == "r" || event == "R") this.restart();
      if(this.bird.velocity>=0)
         this.bird.velocity = -80;
      else
        this.bird.velocity-=40;
    }

    private restart(){
      this.bird = new Bird();
      this.delay = 0;
      this.isAlive = true;
      this.pipes = [];
      this.score = 0;

    }
 
}
