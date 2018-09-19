import { Injectable } from '@angular/core';
import { ILine } from '../interfaces/line.interface';
import { IStop } from '../interfaces/stop.interface';
import { STOPS } from '../../assets/data/stops'

@Injectable()
export class LineService{
  _stopLine:IStop = {
    name:"",
    line: 0,
    orderUp:0,
    orderDown: 0,
    coordinates: [0,0] 

  };
  allStops:IStop[]=STOPS;
    
  //#region Tram lines objects
  _linea1:ILine={
    id: "L1",
    name: "Linea 1",
    Stops: this.allStops.filter(x=>x.line==1)
  }
  _linea2:ILine={
    id: "L2",
    name: "Linea 2",
    Stops: this.allStops.filter(x=>x.line==2)
  }
  _linea3:ILine={
    id: "L3",
    name: "Linea 3",
    Stops: this.allStops.filter(x=>x.line==3)
  }  
  _linea4:ILine={
    id: "L4",
    name: "Linea 4",
    Stops: this.allStops.filter(x=>x.line==4)
  }
  _linea9:ILine={
    id: "L9",
    name: "Linea 9",
    Stops: this.allStops.filter(x=>x.line==9)
  }
   _lineas:ILine[]=[
     this._linea1,
     this._linea2,
     this._linea3
   ];
   //#endregion

  public getLines(){
    return this._lineas;
  }

  public getStops(idName:string){ 
   for(let _line of this._lineas){
     if(_line.id == idName){
       return _line.Stops;
     }
   }
  }

  public getStop(stopName:string){
    this._lineas.forEach(
      s=>s.Stops.map(
        x=>(x.name.toLowerCase()==stopName.toLowerCase())?x:""));
    }
}