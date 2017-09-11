import { BioComponent } from './bio.component';
import { BioRepository } from '../../api/bio/repository/bio.repository';
import { BioRoutingModule } from './bio.routing';
import { BioService } from '../../api/bio/service/bio.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MapsComponent } from "app/core/maps/maps.component";

@NgModule({
  imports: [
    CommonModule,
    BioRoutingModule
  ],
  declarations: [BioComponent],
  providers:[BioService, BioRepository]
})
export class BioModule { }