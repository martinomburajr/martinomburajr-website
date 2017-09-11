import { ArticlesRoutingModule } from './articles.routing';
import { ArticlesComponent } from './articles.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ],
  declarations: [ArticlesComponent
],
  providers:[]
})
export class ArticlesModule { }