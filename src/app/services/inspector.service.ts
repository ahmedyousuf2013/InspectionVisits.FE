import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inspector } from 'app/models/inspector';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectorService {
  private apiUrl = environment.ApiUrl
  constructor(private http: HttpClient) { }


    GetEntiyToIInspectAll(): Observable<ApiResponse<inspector[]>> {
      const url = `${this.apiUrl}Inspectors/get-all-inspectosquery`;
      return this.http.post<ApiResponse<inspector[]>>(url, null);
    }
}
