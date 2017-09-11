import { ClarityModule } from 'clarity-angular';
import { ContactRoutingModule } from './contact.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forChild(),
    ContactRoutingModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }