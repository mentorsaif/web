export interface ICar{
    startCallCount: number;
    getSpeed(): number;
    start(): void;
}

export class Car implements ICar{
    startCallCount: number = 0;

    getSpeed(): number{
        return 40;
    }

    start(){
        ++this.startCallCount;
    }
    
}
