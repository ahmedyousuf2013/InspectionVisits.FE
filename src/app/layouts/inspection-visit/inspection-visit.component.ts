import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntitytoinspectService } from 'app/services/entitytoinspect.service'

import { InspectionVisitService } from 'app/services/inspection-visit.service'
import { entitytoinspect } from 'app/models/entityto-inspect';
import { Router, ActivatedRoute } from '@angular/router';
import { InspectorVisit } from 'app/models/insepctor-visit';
@Component({
  selector: 'app-inspection-visit',
  templateUrl: './inspection-visit.component.html',
  styleUrls: ['./inspection-visit.component.scss']
})
export class InspectionVisitComponent implements OnInit {

  inspectionVisitForm: FormGroup;

  entitytoinspectList: entitytoinspect[] = [];
  insepctorid: Number | null = null;
  constructor(private entityToinspectservice: EntitytoinspectService,
    private InspectionVisitService: InspectionVisitService,
    private fb: FormBuilder,
    private router: Router,
    public route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.insepctorid = this.route.snapshot.params['id'];
    this.createForm();
    this.LoadEntitytoinspectList();



  }
  save() {
    if (this.inspectionVisitForm.valid) {


      let model =
        {
          entityToInspectId: this.inspectionVisitForm.value.EntityToInspectId,
          inspectorId: Number(this.insepctorid),
          scheduledAt: this.inspectionVisitForm.value.ScheduledAt,
          status: Number(this.inspectionVisitForm.value.Status),
          score: this.inspectionVisitForm.value.Score,
          notes: this.inspectionVisitForm.value.Notes
        } as InspectorVisit;
      this.InspectionVisitService.addInspectVisit(model).subscribe(response => {

        if (response.isSuccess) {
          this.router.navigate(['/insepection-visits']);

        }

      })
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
