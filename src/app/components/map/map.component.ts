import { Component,OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { icon, latLng, marker, tileLayer, Layer, FeatureGroup, LatLng, LatLngBounds,latLngBounds   } from 'leaflet';
import { LineService } from '../../services/lines.service';
import { IStop } from '../../interfaces/stop.interface';

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
export class MapComponent implements OnInit,OnDestroy{
  _stops:any[]=[];
  _allStops:IStop[] = [];
  _markersLayer:FeatureGroup<Layer> = new FeatureGroup();
  _center:LatLng = latLng([ 38.351905, -0.486855 ]);
  _bounds:LatLngBounds = latLngBounds ([38.470256117005015, -0.3264999389648438],[ 38.26972361264482,  -0.6437301635742189]);
  
  map:any;
  _options = {
    layers: [ this._markersLayer, streetMaps ],
    center: this._center,
    bounds:this._bounds
  };

  constructor(private lineService:LineService,
              private activateRoute:ActivatedRoute){
                
  }  

  ngOnInit() {
    
    this.activateRoute.params.subscribe(params=>{
      if(params['idLine']!= null){
        this._markersLayer.clearLayers();
        this._stops = this.lineService.getStops(params['idLine']);
        this.setMarkers(this._stops);
        this._center = this._markersLayer.getBounds().getCenter();
        this._bounds = this._markersLayer.getBounds();
      }
    });
  }

  ngOnDestroy() {
    this.map.remove();
  }

  onMapReady(map: L.Map) {
    this.map = map;
 }

  layersControl = {  
    overlays: {
      "Linea":this._markersLayer
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
            iconSize: [ 25, 31 ],
            iconAnchor: [ 23, 35 ],
            iconUrl: 'assets/images/train.png'
          })
        });
        this._markersLayer.addLayer(newMarker.bindPopup(stop.name));
      }
    }

    getCoords($event){
      console.log($event);
    }
}