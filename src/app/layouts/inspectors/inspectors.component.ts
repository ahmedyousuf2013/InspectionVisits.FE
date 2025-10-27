import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { inspector } from 'app/models/inspector';
import { InspectorService } from 'app/services/inspector.service'
@Component({
  selector: 'app-inspectors',
  templateUrl: './inspectors.component.html',
  styleUrls: ['./inspectors.component.scss']
})
export class InspectorsComponent implements OnInit {
  inspectorList: inspector[] = [];
  constructor(private inspectorService: InspectorService, private router: Router) { }

  ngOnInit(): void {
    this.LoadInspectorsList();
  }
  LoadInspectorsList() {
  this.inspectorService.GetEntiyToIInspectAll().subscribe(respose => {
      if (respose.isSuccess) {
        this.inspectorList = respose.result;
        console.log(respose.result);
      } else {
        console.log('Error while fetching Entity to inspect list');
      }
    });
  }

  addinspectVisit(inspectorid: number) {

  this.router.navigate(['/insepection-visit/', inspectorid]);
  }
}
