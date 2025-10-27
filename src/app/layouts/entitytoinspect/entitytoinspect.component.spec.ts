import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitytoinspectComponent } from './entitytoinspect.component';

describe('EntitytoinspectComponent', () => {
  let component: EntitytoinspectComponent;
  let fixture: ComponentFixture<EntitytoinspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntitytoinspectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntitytoinspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
