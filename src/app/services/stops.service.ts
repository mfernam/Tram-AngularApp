import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({  
  
  })

 _allStops:IStop[]=STOPS;
export class StopsService {
  
  constructor() {

  }
  
  getStops() {
    return this._allStops;            
  }
  
  getStop(term) {
        var listOfStops =  this._allStops
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
  }  

}
