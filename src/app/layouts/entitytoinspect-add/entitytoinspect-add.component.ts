import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EntitytoinspectService } from 'app/services/entitytoinspect.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
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
    if (this.entityForm.invalid) {
      this.toastr.error('Please fill in all required fields', 'Validation Error');
      return;
    }
    
    this.entitytoinspectService.addOrUpdateEntityToInspect(this.entityForm.value).subscribe(
      response => {
        if (response.isSuccess) {
          this.toastr.success('Entity saved successfully', 'Success');
          this.router.navigate(['/entity-toinspect']);
        } else {
          this.toastr.error('Failed to save entity', 'Error');
        }
      },
      error => {
        this.toastr.error('An error occurred while saving', 'Error');
        console.error('Save error:', error);
      }
    );
  }

  getEntityById(id: Number) {
    this.entitytoinspectService.getEntityToInspectById(id).subscribe(
      response => {
        if (response.isSuccess && response.result) {
          this.entityForm.patchValue(response.result);
          this.toastr.info('Entity loaded successfully', 'Info');
        } else {
          this.toastr.error('Failed to load entity details', 'Error');
          this.router.navigate(['/entity-toinspect']);
        }
      },
      error => {
        this.toastr.error('Error loading entity details', 'Error');
        console.error('Load error:', error);
        this.router.navigate(['/entity-toinspect']);
      }
    );
  }
}
