import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IthreadComponent } from './ithread.component';

describe('IthreadComponent', () => {
  let component: IthreadComponent;
  let fixture: ComponentFixture<IthreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IthreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IthreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
