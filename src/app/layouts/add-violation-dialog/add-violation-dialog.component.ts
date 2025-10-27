import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InspectionVisitService } from 'app/services/inspection-visit.service';
@Component({
  selector: 'app-add-violation-dialog',
  templateUrl: './add-violation-dialog.component.html',
  styleUrls: ['./add-violation-dialog.component.scss']
})
export class AddViolationDialogComponent implements OnInit {
  violation = {
    code: '',
    description: '',
    severity: 'Low',
    score: 0
  };
  constructor(  
     private InspectionVisitService: InspectionVisitService,
    public dialogRef: MatDialogRef<AddViolationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }
 save() {

  this.InspectionVisitService.AddValiolation({
    inspectionVisitId: this.data.visitId,
    code: this.violation.code,
    description: this.violation.description,
    severity: Number( this.violation.severity),
    score: Number(this.violation.score) 
  }).subscribe(response => {
    if (response.isSuccess) {
      this.dialogRef.close(this.violation);
    }
  }); 
    // هنا تقدر تبعت الـ violation للسيرفر أو ترجّعها للـ parent
    this.dialogRef.close(this.violation);
  } 
}
