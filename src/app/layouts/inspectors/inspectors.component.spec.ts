import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorsComponent } from './inspectors.component';

describe('InspectorsComponent', () => {
  let component: InspectorsComponent;
  let fixture: ComponentFixture<InspectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
