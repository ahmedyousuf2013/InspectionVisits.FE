import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
  constructor(  public dialogRef: MatDialogRef<AddViolationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
 save() {
    // هنا تقدر تبعت الـ violation للسيرفر أو ترجّعها للـ parent
    this.dialogRef.close(this.violation);
  }
}
