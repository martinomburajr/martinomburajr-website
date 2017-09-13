import { ClarityModule } from 'clarity-angular/src';
import { SecondaryEducationRoutingModule } from './secondary-education.routing';
import { SecondaryEducationComponent } from './secondary-education.component';
import { VerticalNavIconService } from 'clarity-angular/layout/vertical-nav/providers/vertical-nav-icon.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forChild(),
    SecondaryEducationRoutingModule
  ],
  declarations: [SecondaryEducationComponent],
  providers:[VerticalNavIconService]
})
export class SecondaryEducationModule { }