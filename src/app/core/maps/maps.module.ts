import { MapsComponent } from './maps.component';
import { MapsRoutingModule } from './maps.routing';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MapsRoutingModule
  ],
  declarations: [MapsComponent],
  providers:[]
})
export class MapsModule { }