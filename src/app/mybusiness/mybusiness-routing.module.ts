import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MybusinessComponent } from './mybusiness.component';

const routes: Routes = [
  {
    path: 'Mybusiness',
    component: MybusinessComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MybusinessRoutingModule {}
