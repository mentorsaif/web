import { Car } from './Car';

export interface ISpeedTrap{
    ticketCount: number;
    checkSpeed();
}

export class SpeedTrap implements ISpeedTrap{
    car: Car;

    constructor(car: Car){
        this.car = car;
    }

    ticketCount: number;
    checkSpeed(): void{
        if(this.car.getSpeed() > 60){
            ++this.ticketCount;
        }
    }
}