/*MODULES*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*ROUTES*/
import { APP_ROUTING } from './routes';
/*SERVICES*/
import { MapService } from './services/map.service';
import { LineService } from './services/lines.service';
import { SearchService } from './services/search.service';
/*COMPONENTS*/
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { MapComponent } from './components/map/map.component';
import { HomeComponent } from './components/home/home.component';
import { ResultComponent } from './components/result/result.component';
import { StopLineComponent } from './components/stop-line/stop-line.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MapComponent,
    HomeComponent,
    ResultComponent,
    StopLineComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    APP_ROUTING,
    LeafletModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    MapService,
    SearchService,
    LineService
  ],
  bootstrap: [
    AppComponent,
    NavBarComponent]
})
export class AppModule { }
