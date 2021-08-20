import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SingleformComponent } from './singleform.component';
import { Mybusiness } from "../../assets/model/mybusiness.schema";
import { Mybusinessbank } from "../../assets/model/Mybusinessbank.schema";
import { Ourgstinfo } from "../../assets/model/Ourgstinfo.schema";
import { Myproduct } from '../../assets/model/myproduct.schema';
import { Mycustomer } from '../../assets/model/mycustomer.schema';

const routes: Routes = [
  {
    path: 'Mybusiness',
    component: SingleformComponent,
    data : {
        schemaClass : Mybusiness,
        schemaClassString : "Mybusiness",
        heading: 'My Business'
    }
  },
  {
    path: 'Mybusinessbank',
    component: SingleformComponent,
    data : {
        schemaClass : Mybusinessbank,
        schemaClassString : "Mybusinessbank",
        heading: 'My Business Bank'
    }
  },
  {
    path: 'Ourgstinfo',
    component: SingleformComponent,
    data : {
        schemaClass : Ourgstinfo,
        schemaClassString : "Ourgstinfo",
        heading: 'Our Gst Info'
    }
  },
  {
    path: 'Myproduct',
    component: SingleformComponent,
    data : {
        schemaClass : Myproduct,
        schemaClassString : "Myproduct",
        heading: 'My Products'
    }
  },
  {
    path: 'Mycustomer',
    component: SingleformComponent,
    data : {
        schemaClass : Mycustomer,
        schemaClassString : "Mycustomer",
        heading: 'My Customers'
    }
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleformRoutingModule {}
