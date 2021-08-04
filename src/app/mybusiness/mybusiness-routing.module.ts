import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MybusinessComponent } from './mybusiness.component';
import { Mybusiness } from "../../assets/model/mybusiness.schema";
import { Mybusinessbank } from "../../assets/model/Mybusinessbank.schema";
import { Ourgstinfo } from "../../assets/model/Ourgstinfo.schema";


const routes: Routes = [
  {
    path: 'Mybusiness',
    component: MybusinessComponent,
    data : {
        schemaClass : Mybusiness,
        schemaClassString : "Mybusiness",
        heading: 'My Business'
    }
  },
  {
    path: 'Mybusinessbank',
    component: MybusinessComponent,
    data : {
        schemaClass : Mybusinessbank,
        schemaClassString : "Mybusinessbank",
        heading: 'My Business Bank'
    }
  },
  {
    path: 'Ourgstinfo',
    component: MybusinessComponent,
    data : {
        schemaClass : Ourgstinfo,
        schemaClassString : "Ourgstinfo",
        heading: 'Our Gst Info'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MybusinessRoutingModule {}
