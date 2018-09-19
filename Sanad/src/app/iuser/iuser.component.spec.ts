import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IuserComponent } from './iuser.component';

describe('IuserComponent', () => {
  let component: IuserComponent;
  let fixture: ComponentFixture<IuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
