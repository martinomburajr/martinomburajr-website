import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';
import { VerticalNavIconService } from 'clarity-angular/src/layout/vertical-nav/providers/vertical-nav-icon.service';

import { EducationComponent } from './education.component';
import { EducationRoutingModule } from './education.routing';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forChild(),
    EducationRoutingModule
    
  ],
  declarations: [EducationComponent],
  providers:[VerticalNavIconService]
})
export class EducationModule { }