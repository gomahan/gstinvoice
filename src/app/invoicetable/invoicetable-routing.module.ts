import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InvoicetableComponent } from './invoicetable.component';
import { Myinvoice } from '../../assets/model/myinvoice.schema';

const routes: Routes = [
  {
    path: 'Myinvoices',
    component: InvoicetableComponent,
    data : {
        schemaClass : Myinvoice,
        schemaClassString : "Myinvoice",
        heading: 'My Invoices',
        editpath: 'Invoice',
    }
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicetableRoutingModule {}
