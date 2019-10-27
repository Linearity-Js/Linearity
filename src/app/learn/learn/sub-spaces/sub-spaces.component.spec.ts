import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSpacesComponent } from './sub-spaces.component';

describe('SubSpacesComponent', () => {
  let component: SubSpacesComponent;
  let fixture: ComponentFixture<SubSpacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubSpacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
