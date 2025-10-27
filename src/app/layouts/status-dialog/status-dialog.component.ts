import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { InspectionVisitService } from 'app/services/inspection-visit.service';

@Component({
  selector: 'app-status-dialog',

  templateUrl: './status-dialog.component.html',
  styleUrls: ['./status-dialog.component.scss'],

})
export class StatusDialogComponent implements OnInit {
  statusForm: FormGroup;
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<StatusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private InspectionVisitService: InspectionVisitService) {


    this.selectedStatus = data.visit.status
    this.statusForm = this.fb.group({
      status: [data?.status || '', Validators.required],
      notes: [data?.notes || '']
    });
  }

  ngOnInit(): void {
    ;
  }
  selectedStatus: string;
  closeDialog(): void {
    this.dialogRef.close();
  }

  save() {
    if (this.statusForm.valid) {
      this.InspectionVisitService.UpdateINspectionVisitStatus({
        insoectionVisitId: this.data.visit.id,
        status: Number(this.statusForm.value.status)

      }).subscribe(response => {
        if (response.isSuccess) {
          this.dialogRef.close(this.statusForm.value);
        }
      });


    }
  }
}
