import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice.component';
import { Myinvoice } from '../../assets/model/myinvoice.schema';

const routes: Routes = [
    {
      path: 'Invoice',
      component: InvoiceComponent,
      data : {
          schemaClass : Myinvoice,
          schemaClassString : "Myinvoice",
          heading: 'My Invoice'
      }
    }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule {}
