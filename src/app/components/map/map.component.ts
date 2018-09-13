import { Component } from '@angular/core';
import { icon, latLng, Map, marker, point, polyline, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }); 
  options = {
      layers: [ this.streetMaps ],
      zoom: 12,
      center: latLng([ 38.351905, -0.486855 ])
    };

  layersControl = {
      baseLayers: {
        'Street Maps': this.streetMaps,
        'Wikimedia Maps': this.wMaps
      }
    };

    getCoords($event){
      console.log($event);
    }
}