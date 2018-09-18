import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleHttpClientComponent } from './simple-http-client.component';

describe('SimpleHttpClientComponent', () => {
  let component: SimpleHttpClientComponent;
  let fixture: ComponentFixture<SimpleHttpClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleHttpClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
