import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';
import { VerticalNavIconService } from 'clarity-angular/src/layout/vertical-nav/providers/vertical-nav-icon.service';

import { TertiaryEducationComponent } from './tertiary-education.component';
import { TertiaryEducationRoutingModule } from './tertiary-education.routing';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forChild(),
    TertiaryEducationRoutingModule
  ],
  declarations: [TertiaryEducationComponent],
  providers:[VerticalNavIconService]
})
export class TertiaryEducationModule { }