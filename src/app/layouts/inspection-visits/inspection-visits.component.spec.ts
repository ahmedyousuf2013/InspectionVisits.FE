import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionVisitsComponent } from './inspection-visits.component';

describe('InspectionVisitsComponent', () => {
  let component: InspectionVisitsComponent;
  let fixture: ComponentFixture<InspectionVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectionVisitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
