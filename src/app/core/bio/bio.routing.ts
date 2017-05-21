import { RouterModule, Routes } from '@angular/router';

import { BioComponent } from './bio.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path:"", 
    component: BioComponent,
    data: {
      title: 'Bio'
    } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BioRoutingModule {}