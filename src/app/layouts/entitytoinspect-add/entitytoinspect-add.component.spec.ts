import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitytoinspectAddComponent } from './entitytoinspect-add.component';

describe('EntitytoinspectAddComponent', () => {
  let component: EntitytoinspectAddComponent;
  let fixture: ComponentFixture<EntitytoinspectAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntitytoinspectAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntitytoinspectAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
