import { PortfolioRoutingModule } from './portfolio.routing';
import { PortfolioComponent } from './portfolio.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  declarations: [PortfolioComponent
],
  providers:[]
})
export class PortfolioModule { }