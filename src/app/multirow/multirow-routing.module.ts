import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MultirowComponent } from './multirow.component';
import { Myproduct } from '../../assets/model/myproduct.schema';
import { Mycustomer } from '../../assets/model/mycustomer.schema';
import { Myinvoice } from '../../assets/model/myinvoice.schema';

const routes: Routes = [
      {
        path: 'Myproducts',
        component: MultirowComponent,
        data : {
            schemaClass : Myproduct,
            schemaClassString : "Myproduct",
            heading: 'My Products',
            editpath: 'Myproduct',
        }
      },
      {
        path: 'Mycustomers',
        component: MultirowComponent,
        data : {
            schemaClass : Mycustomer,
            schemaClassString : "Mycustomer",
            heading: 'My Customers',
            editpath: 'Mycustomer',
        }
      },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultirowRoutingModule {}
