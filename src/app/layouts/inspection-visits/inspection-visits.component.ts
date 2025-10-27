import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InspectorVisit } from 'app/models/insepctor-visit';
import { inspector } from 'app/models/inspector';
import { InspectionVisitService } from 'app/services/inspection-visit.service';
import { InspectorService } from 'app/services/inspector.service';
import { MatDialog } from '@angular/material/dialog';
import { StatusDialogComponent } from '../status-dialog/status-dialog.component';
import { AddViolationDialogComponent } from '../add-violation-dialog/add-violation-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inspection-visits',
  templateUrl: './inspection-visits.component.html',
  styleUrls: ['./inspection-visits.component.scss']
})
export class InspectionVisitsComponent implements OnInit {
  inspectorList: inspector[] = [];
  filteredVisits: InspectorVisit[] = [];
  private inspectionVisitForm: FormGroup;
  constructor(
    private InspectorService: InspectorService,
    private InspectionVisitService: InspectionVisitService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private toastr: ToastrService
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
    
    this.LoadInspectorsList();
    this.searchVisits();
  }
  LoadInspectorsList() {
    this.InspectorService.GetEntiyToIInspectAll().subscribe(
      response => {
        if (response.isSuccess) {
          this.inspectorList = response.result;
          this.toastr.success('Inspectors list loaded successfully', 'Success');
        } else {
          this.toastr.error('Failed to load inspectors list', 'Error');
        }
      },
      error => {
        this.toastr.error('Error loading inspectors list', 'Error');
        console.error('Load error:', error);
      }
    );
  }

  searchVisits() {
    this.InspectionVisitService.GetALinspectionVisits(this.filter).subscribe(
      response => {
        if (response.isSuccess) {
          this.filteredVisits = response.result;
          this.toastr.success('Inspection visits loaded successfully', 'Success');
        } else {
          this.toastr.error('Failed to load inspection visits', 'Error');
        }
      },
      error => {
        this.toastr.error('Error loading inspection visits', 'Error');
        console.error('Load error:', error);
      }
    );
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
        this.toastr.success('Status updated successfully', 'Success');
      }
    });
  }

  openAddViolationDialog(visit: any) {
    const dialogRef = this.dialog.open(AddViolationDialogComponent, {
      width: '500px',
      data: { visitId: visit.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.toastr.success('Violation added successfully', 'Success');
        this.searchVisits(); // Refresh the list
      }
    });
  }
}
