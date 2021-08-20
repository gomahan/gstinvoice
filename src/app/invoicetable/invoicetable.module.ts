import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from "../material.module";

import { InvoicetableComponent } from "./invoicetable.component";
import { InvoicetableRoutingModule } from "./invoicetable-routing.module";

@NgModule({
  declarations: [InvoicetableComponent],
  imports: [CommonModule, SharedModule, MaterialModule, InvoicetableRoutingModule,],
})
export class InvoicetableModule {}
