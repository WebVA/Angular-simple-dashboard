import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Award } from '../models/award';
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class AwardService {
  rootUrl = "https://localhost:000000/"
  constructor(private http: HttpClient) { }

  // **************************************** GET ALL Awards (OBSERVABLE) ***************************************//
  GetAllAwards(): Observable<Award> {
    return this.http.get<Award>(this.rootUrl + "api/award")
  }
  // **************************************** Add New Award (OBSERVABLE) ***************************************//
  AddNewAward(body): Observable<Award> {
    return this.http.post<Award>(this.rootUrl + "api/award/", body)
  }
  // **************************************** Edit Award (OBSERVABLE) ***************************************//
  EditAward(body): Observable<Award> {
    return this.http.put<Award>(this.rootUrl + "api/award", body)
  }
}
