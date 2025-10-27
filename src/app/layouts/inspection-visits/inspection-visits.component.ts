import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InspectorVisit } from 'app/models/insepctor-visit';
import { inspector } from 'app/models/inspector';
import { InspectionVisitService } from 'app/services/inspection-visit.service';
import { InspectorService } from 'app/services/inspector.service';
import { MatDialog } from '@angular/material/dialog';
import { StatusDialogComponent } from '../status-dialog/status-dialog.component';

@Component({
  selector: 'app-inspection-visits',
  templateUrl: './inspection-visits.component.html',
  styleUrls: ['./inspection-visits.component.scss']
})
export class InspectionVisitsComponent implements OnInit {
  inspectorList: inspector[] = [];
  filteredVisits: InspectorVisit[] = [];
  private inspectionVisitForm: FormGroup;
  constructor(private InspectorService: InspectorService,
    private InspectionVisitService: InspectionVisitService,
    private fb: FormBuilder,
    private dialog: MatDialog,

  ) { }

  // الفلاتر
  filter = {
    startDate: null,
    endDate: null,
    status: null,
    inspectorId: null,
  } as any;

  // قائمة الزيارات



  ngOnInit(): void {
    debugger
    this.LoadInspectorsList();
    this.searchVisits();
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
  searchVisits() {

    this.InspectionVisitService.GetALinspectionVisits(this.filter).subscribe(respose => {
      if (respose.isSuccess) {
        this.filteredVisits = respose.result;
        console.log(respose.result);
      } else {
        console.log('Error while fetching Entity to inspect list');
      }
    });
  }
  openStatusDialog(visit: any): void {
    const dialogRef = this.dialog.open(StatusDialogComponent, {
      width: '400px',
      data: { visit }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        visit.status = result;
        this.searchVisits();
      }
    });
  }

  addVaiolation(inspectionVisitId: number) {
    // Navigate to the violation addition page with the inspection visit ID
  }
}
