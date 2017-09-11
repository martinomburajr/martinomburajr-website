import { MusicRoutingModule } from './music.routing';
import { MusicComponent } from './music.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule
  ],
  declarations: [MusicComponent
],
  providers:[]
})
export class MusicModule { }