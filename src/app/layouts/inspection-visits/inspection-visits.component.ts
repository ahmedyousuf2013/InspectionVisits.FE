import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InspectorVisit } from 'app/models/insepctor-visit';
import { inspector } from 'app/models/inspector';
import { InspectionVisitService } from 'app/services/inspection-visit.service';
import { InspectorService } from 'app/services/inspector.service';

@Component({
  selector: 'app-inspection-visits',
  templateUrl: './inspection-visits.component.html',
  styleUrls: ['./inspection-visits.component.scss']
})
export class InspectionVisitsComponent implements OnInit {
  inspectorList: inspector[] = [];
  filteredVisits: InspectorVisit [] = [];
  private inspectionVisitForm: FormGroup;
  constructor(private InspectorService: InspectorService,
    private InspectionVisitService : InspectionVisitService, 
    private fb: FormBuilder
    
  ) { }
   
   

  entityList = [
    { id: 1, name: 'Entity 1' },
    { id: 2, name: 'Entity 2' },
    { id: 3, name: 'Entity 3' }
  ];

  // الفلاتر
  filter = {
    startDate: null,
    endDate: null,
    status: null,
    inspectorId: null,
  }as any;

  // قائمة الزيارات
  


  ngOnInit(): void {
   debugger
    this.LoadInspectorsList();
    this.loadInspectionVisits();
  }
  LoadInspectorsList() {
    this.InspectorService.GetEntiyToIInspectAll().subscribe(respose => {
      if (respose.isSuccess) {
        this.inspectorList = respose.result;
        console.log(respose.result);
      } else {
        console.log('Error while fetching Entity to inspect list');
      }
    });
  }
  loadInspectionVisits() 
  {  

    this.InspectionVisitService.GetALinspectionVisits(this.filter).subscribe(respose => {
      if (respose.isSuccess) {
       this.filteredVisits = respose.result;
        console.log(respose.result);
      } else {
        console.log('Error while fetching Entity to inspect list');
      }
    });
  }
  
}
