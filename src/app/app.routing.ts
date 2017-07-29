import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { LayoutComponent } from './core/layout/layout/layout.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { 
    path: '', 
    component: LayoutComponent, 
    data: {
      title:'Home'
    },
    children: [
      // {
      //   path: 'home',
      //   loadChildren: './core/home/home.module#HomeModule'
      // },
      {
        path: 'bio',
        loadChildren: './core/bio/bio.module#BioModule'
      },
      {
        path: 'maps',
        loadChildren: './core/maps/maps.module#MapsModule'
      },
      // {
      //   path: 'portfolio',
      //   loadChildren: './core/portfolio/portfolio.module#PortfolioModule'
      // },
      // {
      //   path: 'hobbies',
      //   loadChildren: './core/hobbies/hobby.module#HobbyModule'
      // }      
    ] 
  }
];

@NgModule ({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutes {}
