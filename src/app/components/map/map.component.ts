import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { icon, latLng, Map, marker, tileLayer, Layer, Marker, LayerGroup  } from 'leaflet';
import { LineService } from '../../services/lines.service';

const streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  const wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });  
  const pnoaWMS = tileLayer.wms('http://www.ign.es/wms-inspire/pnoa-ma?SERVICE=WMS&', {
    layers:  "OI.OrthoimageCoverage",
    format: 'image/jpeg',
    detectRetina: true,
    attribution: "PNOA WMS. Cedido por © Instituto Geográfico Nacional de España"
  });  

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  _stops:any[]=[];
  _markers:Layer[] = [];
  markersLayer:LayerGroup = new LayerGroup();

  constructor(private lineService:LineService,
              private activateRoute:ActivatedRoute){
              
    this._stops = lineService.getStops("Linea 3")
    this.setMarkers(this._stops);
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params=>{
      if(params['name']!= null){
        this._stops = this.lineService.getStops(params['name']);
      }
    })
  }
  
  options = {
      layers: [ this.markersLayer, streetMaps ],
      zoom: 12,
      center: latLng([ 38.351905, -0.486855 ])
    };

  layersControl = {  
    overlays: {
      "Linea":this.markersLayer
    },   
      baseLayers: {
        'Street Maps': streetMaps,
        'Wikimedia Maps': wMaps,
        'PNOA': pnoaWMS
      }
    };

    setMarkers(stops:any[]){
      for(let stop of stops){
        const newMarker = marker([stop.coordinates[1],stop.coordinates[0]],{
          icon: icon({
            iconSize: [ 25, 41 ],
            iconAnchor: [ 13, 41 ],
            iconUrl: 'assets/images/rail_stop.png'
          })
        });
        this.markersLayer.addLayer(newMarker.bindPopup(stop.name));
      }
    }

    getCoords($event){
      console.log($event);
    }
}