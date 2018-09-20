import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyServiceComponent } from './spotify-service.component';

describe('SpotifyServiceComponent', () => {
  let component: SpotifyServiceComponent;
  let fixture: ComponentFixture<SpotifyServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
