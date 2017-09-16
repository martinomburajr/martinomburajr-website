import { VerticalNavIconService } from 'clarity-angular/layout/vertical-nav/providers/vertical-nav-icon.service';
import { ClarityModule } from 'clarity-angular';
import { PortfolioRoutingModule } from './portfolio.routing';
import { PortfolioComponent } from './portfolio.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TychoComponent } from './tycho/tycho.component';
import { LogosComponent } from './logos/logos.component';
import { AssemblyComponent } from './assembly/assembly.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forChild(),
    PortfolioRoutingModule
  ],
  declarations: [PortfolioComponent,
    TychoComponent,
    LogosComponent,
    AssemblyComponent,
    AssemblyComponent
],
  providers:[VerticalNavIconService]
})
export class PortfolioModule { }