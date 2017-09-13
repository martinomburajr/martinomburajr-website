import { SecondaryEducationComponent } from './secondary-education.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path:"", 
    component: SecondaryEducationComponent,
    data: {
      title: 'Secondary Education'
    } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondaryEducationRoutingModule {}