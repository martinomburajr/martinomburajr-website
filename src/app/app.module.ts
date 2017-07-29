import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import {AsideToggleDirective} from './core/layout/shared/aside.directive';
import {BioModule} from './core/bio/bio.module'
import {BreadcrumbsComponent} from './core/layout/shared/breadcrumb.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GeolocationRepository } from './api/repository/geolocation/geolocation.repository';
import { GeolocationService } from './api/service/geolocation/geolocation.service';
import { HomeComponent } from './core/home/home.component';
import { HomeModule } from './core/home/home.module';
import { HttpModule } from '@angular/http';
import { LayoutComponent } from './core/layout/layout/layout.component';
import {NAV_DROPDOWN_DIRECTIVES} from './core/layout/shared/nav-dropdown.directive';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import {SIDEBAR_TOGGLE_DIRECTIVES} from './core/layout/shared/sidebar.directive';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    LayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    HomeModule,
    AngularFireModule.initializeApp(environment.firebase, 'martinomburajr-a1bcd'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule,
    NgbModule.forRoot(),
  ],
  providers: [GeolocationService, GeolocationRepository],
  bootstrap: [AppComponent]
})

export class AppModule { }
