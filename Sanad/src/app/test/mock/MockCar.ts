export class MockCar{
    startCallCount: number = 0;
    start(){
        ++this.startCallCount;
    }
}