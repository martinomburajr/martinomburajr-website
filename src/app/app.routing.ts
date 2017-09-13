import { BioComponent } from './core/bio/bio.component';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { LayoutComponent } from './core/layout/layout/layout.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'bio',
    pathMatch: 'full',
  },
  // {
  //   path: 'bio',
  //   component: BioComponent,
  // },
  { 
    path: '', 
    component: LayoutComponent, 
    data: {
      title:'Bio'
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
        path: 'bio/education',
        loadChildren: './core/bio/subcomponents/education/education.module#EducationModule'
      },
      {
        path: 'bio/education/tertiary',
        loadChildren: './core/bio/subcomponents/education/tertiary-education/tertiary-education.module#TertiaryEducationModule'
      },
      {
        path: 'bio/education/secondary',
        loadChildren: './core/bio/subcomponents/education/secondary-education/secondary-education.module#SecondaryEducationModule'
      },
      // {
      //   path: 'bio/education/secondary-education',
      //   loadChildren: './core/bio/subcomponent/education/secondary-education.module#SecondaryEducationModule'
      // },
      {
        path: 'maps',
        loadChildren: './core/maps/maps.module#MapsModule'
      },
      {
        path: 'portfolio',
        loadChildren: './core/portfolio/portfolio.module#PortfolioModule'
      },
      {
        path: 'music',
        loadChildren: './core/music/music.module#MusicModule'
      },
      {
        path: 'articles',
        loadChildren: './core/articles/articles.module#ArticlesModule'
      },
      {
        path: 'contact',
        loadChildren: './core/contact/contact.module#ContactModule'
      },
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
