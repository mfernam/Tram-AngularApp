/*MODULES*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
/*ROUTES*/
import { APP_ROUTING } from './routes';
/*SERVICES*/
import { MapService } from './services/map.service';
import { SearchService } from './services/search.service';
/*COMPONENTS*/
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { MapComponent } from './components/map/map.component';
import { HomeComponent } from './components/home/home.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MapComponent,
    HomeComponent,
    ResultComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    APP_ROUTING,
    LeafletModule.forRoot()
  ],
  providers: [
    MapService,
    SearchService
  ],
  bootstrap: [
    AppComponent,
    NavBarComponent]
})
export class AppModule { }
