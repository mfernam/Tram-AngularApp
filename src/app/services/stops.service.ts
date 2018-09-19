import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({  
  providedIn: 'root'
  })
export class StopsService {
  stopsJSONUrl:string = '../../../assets/data/stops.json';
  
  constructor(private _httpClient: HttpClient) {

  }
  
  getStops(): Observable<any> {
    return this._httpClient.get(this.stopsJSONUrl);            
  }

}