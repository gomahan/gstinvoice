import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MybusinessComponent } from './mybusiness.component';
import { Mybusiness } from "../../assets/model/mybusiness.schema";

const routes: Routes = [
  {
    path: 'Mybusiness',
    component: MybusinessComponent,
    data : {
        schemaClass : Mybusiness,
        schemaClassString : "Mybusiness",
        heading: 'My Business'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MybusinessRoutingModule {}
