import { Injectable } from '@angular/core';
import { ILine } from '../interfaces/line.interface';
import { IStop } from '../interfaces/stop.interface';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class LineService {
  _stopsLinea1:any[]=[
    {
      name: "Alicante - Luceros",
      line: 1,
      orderUp:1,
      orderDown: 20,
      coordinates: [
        -0.49060821533203125,
        38.34613278145565
      ] 
    },
    {
        name: "Amerador",
        line: 1,
        orderUp:9,
        orderDown: 12,
        coordinates: [
          -0.37334203720092773,
          38.444379658727314
        ]
    },
    {
        name: "Benidorm",
        line: 1,
        orderUp:20,
        orderDown: 1 ,
        coordinates: [
          -0.13492584228515625,
          38.54816542304656
        ] 
    },
    {
        name: "C.C. La Marina - Finestrat",
        line: 1,
        orderUp:18,
        orderDown: 3,
        coordinates: [
          -0.1750892400741577,
          38.540705564177024
        ]
    },
    {
        name: "Cala Piteres",
        line: 1,
        orderUp:11,
        orderDown: 10,
        coordinates: [
          -0.35301089286804194,
          38.454046610053666
        ]  
    },
    {
        name: "Costera Pastor",
        line: 1,
        orderUp:16,
        orderDown: 5,
        coordinates: [
          -0.22006988525390622,
          38.51365394151274
        ]    
    },
    {
        name: "Coveta Fumà",
        line: 1,
        orderUp:10,
        orderDown: 11,
        coordinates: [
          -0.36451220512390137,
          38.450227877897674
        ]    
    },
    {
        name: "Creueta",
        line: 1,
        orderUp:15,
        orderDown: 6,
        coordinates: [
          -0.23160338401794434,
          38.51014479500316
        ]    
    },
    {
        name: "El Campello",
        line: 1,
        orderUp:7,
        orderDown: 14,
        coordinates: [
          -0.39488017559051514,
          38.428050872075374
        ]    
    },
    {
        name: "Hospital Vila",
        line: 1,
        orderUp:17,
        orderDown: 4,
        coordinates: [
          -0.19939541816711426,
          38.53071871520048
        ]    
    },
    {
        name: "La Isleta",
        line: 1,
        orderUp:5,
        orderDown: 16,
        coordinates: [
          -0.44756412506103516,
          38.362475870873475
        ]   
    },
    {
        name: "La Vila Joiosa",
        line: 1,
        orderUp:14,
        orderDown: 7,
        coordinates: [
          -0.23671030998229983,
          38.50585467303399
        ]   
    },
    {
        name: "Lucentum",
        line: 1,
        orderUp:6,
        orderDown: 15,
        coordinates: [
          -0.4388415813446045,
          38.37003409070623
        ]    
    },
    {
        name: "Marq - Castillo",
        line: 1,
        orderUp:3,
        orderDown: 18,
        coordinates: [
          -0.47623157501220703,
          38.352106745089706
        ]
    },
    {
        name: "Mercado",
        line: 1,
        orderUp:2,
        orderDown: 19,
        coordinates: [
          -0.4845035076141358,
          38.348295244914475
        ]
    },
    {
        name: "Paradís",
        line: 1,
        orderUp:13,
        orderDown: 8,
        coordinates: [
          -0.25762081146240234,
          38.50020408328762
        ]   
    },
    {
        name: "Poble Espanyol",
        line: 1,
        orderUp:8,
        orderDown: 13,
        coordinates: [
          -0.382997989654541,
          38.43896795334589
        ]    
    },
    {
        name: "Sangueta",
        line: 1,
        orderUp:4,
        orderDown: 17,
        coordinates: [
          -0.46751439571380615,
          38.352115158775476
        ]    
    },
    {
        name: "Terra Mítica",
        line: 1,
        orderUp:19,
        orderDown: 2,
        coordinates: [
          -0.15885114669799805,
          38.54668022600258
        ] 
    },
    {
        name: "Venta Lanuza",
        line: 1,
        orderUp:12,
        orderDown: 9,
        coordinates: [
          -0.3183889389038086,
          38.477009353029615
        ]  
    }];

    _stopsLinea3:any[]=[
      {
        name: "Albufereta",
        line: 3,
        orderUp:6,
        orderDown: 12 
      },
      {
        name: "Alicante - Luceros",
        line: 3,
        orderUp:1,
        orderDown: 17,
        coordinates: [
          -0.49060821533203125,
          38.34613278145565
        ] 
      },
      {
        name: "Campo de Golf",
        line: 3,
        orderUp:9,
        orderDown: 9
      },
      {
        name: "Carrabiners",
        line: 3,
        orderUp:11,
        orderDown: 7
      },
      {
        name: "Condomina",
        line: 3,
        orderUp:8,
        orderDown: 10
      },
      {
        name: "Costa Blanca",
        line: 3,
        orderUp:10,
        orderDown: 8
      },
      {
        name: "El Campello",
        line: 3,
        orderUp:17,
        orderDown: 1
      },
      {
        name: "Fabraquer",
        line: 3,
        orderUp:14,
        orderDown: 4
      },
      {
        name: "La Isleta",
        line: 3,
        orderUp:5,
        orderDown: 13
      },
      {
        name: "Les Llances",
        line: 3,
        orderUp:13,
        orderDown: 5
      },
      {
        name: "Lucentum",
        line: 3,
        orderUp:7,
        orderDown: 11
      },
      {
        name: "MARQ - Castillo",
        line: 3,
        orderUp:3,
        orderDown: 15,
        coordinates: [
          -0.47623157501220703,
          38.352106745089706
        ]
      },
      {
        name: "Mercado",
        line: 3,
        orderUp:2,
        orderDown: 16,
        coordinates: [
          -0.47623157501220703,
          38.352106745089706
        ]
      },
      {
        name: "Muchavista",
        line: 3,
        orderUp:12,
        orderDown: 6
      },
      {
        name: "Pla Barraques",
        line: 3,
        orderUp:16,
        orderDown: 2
      },
      {
        name: "Salesians",
        line: 3,
        orderUp:15,
        orderDown: 3
      },
      {
        name: "Sangueta",
        line: 3,
        orderUp:4,
        orderDown: 14
      }
    ];

  _linea1:ILine={
    name: "Linea 1",
    Stops: this._stopsLinea1
  }
  _linea3:ILine={
    name: "Linea 3",
    Stops: this._stopsLinea3
  }
   _lineas:ILine[]=[
     this._linea1,
     this._linea3
   ];
   

  public getLines(){
    return this._lineas;
  }

  public getStops(lineName:string){ 
   for(let _line of this._lineas){
     if(_line.name == lineName){
       return _line.Stops;
     }
   }
  }

}