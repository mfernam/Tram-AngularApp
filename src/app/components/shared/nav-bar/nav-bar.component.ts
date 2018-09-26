import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LineService} from '../../../services/lines.service';
import { ILine } from '../../../interfaces/line.interface';
import { StopsService } from '../../../services/stops.service';
import { FormControl } from '@angular/forms';
import { StopNamePipe} from '../../../pipes/stop-name.pipe';

@Component({
  selector: "app-nav-bar",
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  implements OnInit{
  
  _lines:ILine[]=[];
  _line:ILine;
  _stops:any[]=[];
  stopName:string="";
  searcherForm:FormControl;
  filteredOptions: any[];
  
  constructor(private lineService:LineService,private stopService:StopsService,
    private _router:Router) {
    this._lines = this.lineService.getLines();
    this._stops = this.stopService.getStops();
   }    
   ngOnInit(): void {
    this._stops = this.stopService.getStops();
  }

   getLine(idLine:string){
     if(idLine!="0"){
      this._router.navigate(['/map',idLine]);
     }
     
   }

  searchStop(){
    if(this.stopName!=""){
     this._router.navigate(['/map',this.stopName]);
    }
  }
}
