import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';

const APP_ROUTES: Routes = [
  { path: 'map', component: MapComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);