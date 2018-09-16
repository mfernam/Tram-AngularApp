import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { HomeComponent } from './components/home/home.component';
import { StopLineComponent } from './components/stop-line/stop-line.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'map/:nameLine', component: MapComponent },
  { path: 'stopLine/:nameLine', component: StopLineComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);