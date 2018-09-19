import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImessageComponent } from './imessage.component';

describe('ImessageComponent', () => {
  let component: ImessageComponent;
  let fixture: ComponentFixture<ImessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
