import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardData } from 'app/models/dashboard-data';
import { InspectorVisit } from 'app/models/insepctor-visit';
import { inspectionVisitCriteria } from 'app/models/inspection-visit-criteris';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InspectionVisitService {
    private apiUrl = environment.ApiUrl

  constructor(private http: HttpClient) { }


    addInspectVisit(model: InspectorVisit): Observable<ApiResponse<Boolean>> {
      const url = `${this.apiUrl}InspectVisit/addinspection-visit`;
      return this.http.post<ApiResponse<boolean>>(url, model);
    }
    
    GetALinspectionVisits(model: any): Observable<ApiResponse<InspectorVisit[]>> {
      const url = `${this.apiUrl}InspectVisit/getall-ispections-visits`;
      return this.http.post<ApiResponse<InspectorVisit[]>>(url, model);
    }

  UpdateINspectionVisitStatus(model: any): Observable<ApiResponse<InspectorVisit[]>> {
      const url = `${this.apiUrl}InspectVisit/update-inspection-viststatus`;
      return this.http.post<ApiResponse<InspectorVisit[]>>(url, model);
    }

     AddValiolation(model: any): Observable<ApiResponse<boolean>> {
      const url = `${this.apiUrl}InspectVisit/add-vaiolations`;
      return this.http.post<ApiResponse<boolean>>(url, model);
    }

  getDashboard(): Observable<ApiResponse< DashboardData>> {

      const url = `${this.apiUrl}InspectVisit/get-dashboard`;
    return this.http.get<ApiResponse< DashboardData>>(url);
  }
}
