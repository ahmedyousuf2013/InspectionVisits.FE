import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EntitytoinspectService } from 'app/services/entitytoinspect.service'

@Component({
  selector: 'app-entitytoinspect-add',
  templateUrl: './entitytoinspect-add.component.html',
  styleUrls: ['./entitytoinspect-add.component.scss']
})
export class EntitytoinspectAddComponent implements OnInit {
  entityForm: FormGroup;
  entityId: Number | null = null;
  constructor(private entitytoinspectService: EntitytoinspectService,
    private fb: FormBuilder,
    private router: Router,
    public route: ActivatedRoute,
  ) {
    this.entityId = this.route.snapshot.params['id'];
    if (this.entityId) {
      this.getEntityById(this.entityId);


    }
    this.entityForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      category: ['', Validators.required]
      , address: ['', Validators.required]

    });
  }

  ngOnInit(): void {
  }
  save() {
    this.entitytoinspectService.addOrUpdateEntityToInspect(this.entityForm.value).subscribe(response => {
      if (response.isSuccess) {
        this.router.navigate(['/entity-toinspect']);
        console.log('Entity to inspect saved successfully');
      } else {
        console.log('Error saving entity to inspect');
      }
    });
  }

  getEntityById(id: Number) {
    this.entitytoinspectService.getEntityToInspectById(id).subscribe(response => {
      if (response.isSuccess && response.result) {
        this.entityForm.patchValue(response.result);
      } else {
        console.log('Error fetching entity to inspect details');
      }
    });
  }
}
