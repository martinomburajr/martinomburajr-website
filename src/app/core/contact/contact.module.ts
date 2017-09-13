import { ClarityModule } from 'clarity-angular';
import { ContactRoutingModule } from './contact.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import {VerticalNavIconService} from "clarity-angular/src/layout/vertical-nav/providers/vertical-nav-icon.service";

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forChild(),
    ContactRoutingModule
  ],
  declarations: [ContactComponent],
  providers:[VerticalNavIconService]
})
export class ContactModule { }