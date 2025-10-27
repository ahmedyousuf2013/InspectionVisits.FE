import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { inspector } from 'app/models/inspector';
import { InspectorService } from 'app/services/inspector.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inspectors',
  templateUrl: './inspectors.component.html',
  styleUrls: ['./inspectors.component.scss']
})
export class InspectorsComponent implements OnInit {
  inspectorList: inspector[] = [];
  constructor(
    private inspectorService: InspectorService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.LoadInspectorsList();
  }

  LoadInspectorsList() {
    this.inspectorService.GetEntiyToIInspectAll().subscribe(
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

  addinspectVisit(inspectorid: number) {
    if (inspectorid) {
      this.router.navigate(['/insepection-visit/', inspectorid]);
      this.toastr.info('Navigating to inspection visit', 'Info');
    } else {
      this.toastr.error('Invalid inspector ID', 'Error');
    }
  }
}
