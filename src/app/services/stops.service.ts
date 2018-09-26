import { Injectable } from '@angular/core';
import { IStop } from '../interfaces/stop.interface';
import { STOPS } from '../../assets/data/stops';

@Injectable()

export class StopsService {
  
 _allStops:IStop[]=STOPS;
  constructor() {

  }
  
  getStops() {
    return this._allStops;            
  }
  
  /*getStop(term) {
        var listOfStops =  this._allStops.
        .pipe(
            debounceTime(500),  
            map(
                (data: any) => {
                    return (
                        data.length != 0 ? data as any[] : [{"name": "No Record Found"} as any]
                    );
                }
        ));
        return listOfStops; 
  }  */

}
