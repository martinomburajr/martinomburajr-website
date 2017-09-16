import { AssemblyComponent } from './assembly/assembly.component';
import { LogosComponent } from './logos/logos.component';
import { TychoComponent } from './tycho/tycho.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {PortfolioComponent} from "app/core/portfolio/portfolio.component";

const routes : Routes = [
  { 
    path:"", 
    component: PortfolioComponent,
    data: {
      title: 'Portfolio'
    } 
  },
  { 
    path:"tycho", 
    component: TychoComponent,
    data: {
      title: 'Tycho'
    } 
  },
  { 
    path:"logos", 
    component: LogosComponent,
    data: {
      title: 'Logos'
    } 
  },
  { 
    path:"assembly", 
    component: AssemblyComponent,
    data: {
      title: 'Logos'
    } 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {}