import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasisComponent } from './basis.component';

describe('BasisComponent', () => {
  let component: BasisComponent;
  let fixture: ComponentFixture<BasisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
