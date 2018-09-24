import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({  
  
  })

 _allStops:IStop[]=STOPS;
export class StopsService {
  stopsJSONUrl:string = '../../../assets/data/stops.json';
  
  constructor() {

  }
  
  getStops() {
    return this._allStops;            
  }

}
