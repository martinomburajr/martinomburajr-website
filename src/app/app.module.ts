import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GeolocationRepository } from './api/repository/geolocation/geolocation.repository';
import { GeolocationService } from './api/service/geolocation/geolocation.service';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'martinomburajr-a1bcd'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [GeolocationService, GeolocationRepository],
  bootstrap: [AppComponent]
})

export class AppModule { }
