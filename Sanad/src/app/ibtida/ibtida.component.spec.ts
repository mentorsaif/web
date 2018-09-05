import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbtidaComponent } from './ibtida.component';

describe('IbtidaComponent', () => {
  let component: IbtidaComponent;
  let fixture: ComponentFixture<IbtidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbtidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbtidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
