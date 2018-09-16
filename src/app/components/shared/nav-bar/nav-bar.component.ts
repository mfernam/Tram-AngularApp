import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private lineService:LineService,
    private _router:Router) {
    this._lines = this.lineService.getLines();
   }
    
   getStops(lineName:string){
    this.lineService.getStops(lineName);
   }

   getLine(idLine:string){
     if(idLine!="0"){
      this._router.navigate(['/map',idLine]);
     }
     
   }

  searchStop(nameLine:string){

  }
}
