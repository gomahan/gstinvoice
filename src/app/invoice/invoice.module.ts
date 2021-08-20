import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from "../material.module";

import { InvoiceComponent } from "./invoice.component";
import { InvoiceRoutingModule } from "./invoice-routing.module";

@NgModule({
  declarations: [InvoiceComponent],
  imports: [CommonModule, SharedModule, MaterialModule, InvoiceRoutingModule,],
})
export class InvoiceModule {}
