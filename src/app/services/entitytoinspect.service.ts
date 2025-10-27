import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { entitytoinspect } from 'app/models/entityto-inspect';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EntitytoinspectService {
  private apiUrl = environment.ApiUrl
  constructor(private http: HttpClient) { }

  GetEntiyToIInspectAll(): Observable<ApiResponse<entitytoinspect[]>> {
    const url = `${this.apiUrl}EntityToInspect/getall-entityto-insepectquery`;
    return this.http.post<ApiResponse<entitytoinspect[]>>(url, null);
  }
  addOrUpdateEntityToInspect(model: entitytoinspect): Observable<ApiResponse<Boolean>> {
    const url = `${this.apiUrl}EntityToInspect/create-orupdate-entitytoinspect`;
    return this.http.post<ApiResponse<boolean>>(url, model);
  }

  getEntityToInspectById(id: Number): Observable<ApiResponse<entitytoinspect>> {
    const url = `${this.apiUrl}EntityToInspect/get-entitytoinsepect-byId?EntityToInsepectId=${id}`;
    return this.http.get<ApiResponse<entitytoinspect>>(url);
  }
  deleteEntity(entityId: number): Observable<ApiResponse<boolean>> {

    const url = `${this.apiUrl}EntityToInspect/delete-entityto-inspect?entityToinspectId=${entityId}`;
    return this.http.delete<ApiResponse<boolean>>(url);
  }
}
