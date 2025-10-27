import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddViolationDialogComponent } from './add-violation-dialog.component';

describe('AddViolationDialogComponent', () => {
  let component: AddViolationDialogComponent;
  let fixture: ComponentFixture<AddViolationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddViolationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddViolationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
