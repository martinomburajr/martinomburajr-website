import { VerticalNavIconService } from 'clarity-angular/layout/vertical-nav/providers/vertical-nav-icon.service';
import { ClarityModule } from 'clarity-angular';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from './work-experience.component';
import { WorkExperienceRoutingModule } from './work-experience.routing';
import {NgModule} from "@angular/core";

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forChild(),
    WorkExperienceRoutingModule
  ],
  declarations: [
    WorkExperienceComponent
],
  providers:[VerticalNavIconService]
})
export class WorkExperienceModule { }