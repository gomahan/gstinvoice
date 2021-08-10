import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { HomeRoutingModule } from './home/home-routing.module';
import { SingleformRoutingModule } from './singleform/singleform-routing.module';
import { MultirowRoutingModule } from './multirow/multirow-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    HomeRoutingModule,
    SingleformRoutingModule,
    MultirowRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
