import { Component } from '@angular/core';
import { LineService} from '../../../services/lines.service';
import { ILine } from '../../../interfaces/line.interface';

@Component({
  selector: "app-nav-bar",
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  {
  
  _lines:ILine[]=[];
  _line:ILine;

  constructor(private lineService:LineService) {
    this._lines = this.lineService.getLines();
   }
    
   getStops(lineName:string){
    this.lineService.getStops(lineName);
   }

   onChange(deviceValue) {
    console.log(deviceValue);
  }

  searchStop(nameLine:string){
    
  }
}
