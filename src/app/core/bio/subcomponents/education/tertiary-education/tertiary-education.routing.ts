import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TertiaryEducationComponent } from './tertiary-education.component';

const routes: Routes = [
  { 
    path:"", 
    component: TertiaryEducationComponent,
    data: {
      title: 'Tertiary Education'
    } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TertiaryEducationRoutingModule {}