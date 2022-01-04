import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CritriaService {

  rootUrl = "https://localhost:000000/"
  constructor(private http: HttpClient) { }
}
