import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { entitytoinspect } from 'app/models/entityto-inspect';
import { EntitytoinspectService } from 'app/services/entitytoinspect.service';

@Component({
  selector: 'app-entitytoinspect',
  templateUrl: './entitytoinspect.component.html',
  styleUrls: ['./entitytoinspect.component.scss']
})
export class EntitytoinspectComponent implements OnInit {

  entitytoinspectList: entitytoinspect[] = [];
  constructor(private entityToinspectservice: EntitytoinspectService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.LoadEntitytoinspectList();


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
  AddEntityNewEntity() {
    this.router.navigate(['/entity-add']);
  }
  editEntity(entityId: Number) {

    this.router.navigate(['/entity-add', entityId]);
  }
}
