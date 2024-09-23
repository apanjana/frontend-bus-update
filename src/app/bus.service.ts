import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private apiUrl = 'http://localhost:8100/buses';

  constructor(private http: HttpClient) { }

  getBuses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
 
  addBus(bus: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, bus);
  }

}