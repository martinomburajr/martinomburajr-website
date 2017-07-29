import { MapsComponent } from './maps.component';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  { path:'',
    component: MapsComponent,
    data: {
      title: 'Maps'
    }
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule {}