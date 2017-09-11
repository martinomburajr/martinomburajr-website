import { VerticalNavIconService } from 'clarity-angular/layout/vertical-nav/providers/vertical-nav-icon.service';
import { ClarityModule } from 'clarity-angular';
import { PortfolioRoutingModule } from './portfolio.routing';
import { PortfolioComponent } from './portfolio.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forChild(),
    PortfolioRoutingModule
  ],
  declarations: [PortfolioComponent
],
  providers:[VerticalNavIconService]
})
export class PortfolioModule { }