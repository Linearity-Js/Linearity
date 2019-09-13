import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaussComponent } from './gauss.component';

describe('GaussComponent', () => {
  let component: GaussComponent;
  let fixture: ComponentFixture<GaussComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaussComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
