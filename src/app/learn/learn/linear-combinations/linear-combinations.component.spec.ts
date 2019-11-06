import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearCombinationsComponent } from './linear-combinations.component';

describe('LinearCombinationsComponent', () => {
  let component: LinearCombinationsComponent;
  let fixture: ComponentFixture<LinearCombinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearCombinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearCombinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
