import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionVisitComponent } from './inspection-visit.component';

describe('InspectionVisitComponent', () => {
  let component: InspectionVisitComponent;
  let fixture: ComponentFixture<InspectionVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectionVisitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
