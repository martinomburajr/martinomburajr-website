import { ClarityModule } from 'clarity-angular';
import { VerticalNavIconService } from 'clarity-angular/layout/vertical-nav/providers/vertical-nav-icon.service';
import { ArticlesRoutingModule } from './articles.routing';
import { ArticlesComponent } from './articles.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forChild(),
    ArticlesRoutingModule
  ],
  declarations: [ArticlesComponent
],
  providers:[VerticalNavIconService]
})
export class ArticlesModule { }