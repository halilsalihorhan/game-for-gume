import { Gate } from './gate';
import { EventEmitter } from '@angular/core';

export class Swan{
    position = 6;
    direction = 0;
    velocity = 0.4;
    isBlocked = true;
    scores = 0;
    gate:Gate;
    levelUp: EventEmitter<number>;
    constructor(gate:Gate, levelUp: EventEmitter<number>){
        this.gate = gate;
        this.levelUp = levelUp;
    }

    move(direction: number) {
        this.direction = direction;

        if(!this.isBlocked)
            if(this.position >= 60)
                this.levelUp.emit();

        if(this.position >= 1.2 && (this.position<=52.8 || !this.isBlocked)) 
            this.position=(direction == 0 )?this.position+ this.velocity:this.position-this.velocity;
        else{
            if(this.position>=52.8) this.position = 52.8;
            if(this.position<=1.2) this.position = 1.2;

        }
           
    }

    score() {
        if(this.scores < 10)
            this.scores++;
        else{
            this.gate.open();
            this.isBlocked = false;
        }
            
            
    }

}