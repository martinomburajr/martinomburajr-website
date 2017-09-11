import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {PortfolioComponent} from "app/core/portfolio/portfolio.component";

const routes : Routes = [
  { path:"", 
    component: PortfolioComponent,
    data: {
      title: 'Portfolio'
    } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {}