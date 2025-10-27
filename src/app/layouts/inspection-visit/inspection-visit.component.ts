import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntitytoinspectService } from 'app/services/entitytoinspect.service'
import { entitytoinspect } from 'app/models/entityto-inspect';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inspection-visit',
  templateUrl: './inspection-visit.component.html',
  styleUrls: ['./inspection-visit.component.scss']
})
export class InspectionVisitComponent implements OnInit {

  inspectionVisitForm: FormGroup;
  entitytoinspectList: entitytoinspect[] = [];
  entityId: Number | null = null;
  constructor(private entityToinspectservice: EntitytoinspectService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
   this.LoadEntitytoinspectList();



  }
  save() {
    if (this.inspectionVisitForm.valid) {
      console.log('Form Values:', this.inspectionVisitForm.value);
      // هنا يمكن إضافة كود لحفظ البيانات في قاعدة البيانات أو إرسالها إلى الـ API
    } else {
      console.log('Form is not valid');
    }

  }

  createForm() {
    this.inspectionVisitForm = this.fb.group({
      EntityToInspectId: [null, Validators.required],
      ScheduledAt: [null, Validators.required],
      Status: [null, Validators.required],
      Score: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      Notes: ['']
    });
  }

  LoadEntitytoinspectList() {
    this.entityToinspectservice.GetEntiyToIInspectAll().subscribe(respose => {
      if (respose.isSuccess) {

        this.entitytoinspectList = respose.result;
        console.log(respose.result);
      } else {
        console.log('Error while fetching Entity to inspect list');
      }
    });
  }
}
