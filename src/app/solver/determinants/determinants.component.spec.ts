import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeterminantsComponent } from './determinants.component';

describe('DeterminantsComponent', () => {
  let component: DeterminantsComponent;
  let fixture: ComponentFixture<DeterminantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeterminantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeterminantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
