import { EducationComponent } from './education.component';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  { path:"", 
    component: EducationComponent,
    data: {
      title: 'Education'
    } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule {}