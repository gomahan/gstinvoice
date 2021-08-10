import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from "../material.module";

import { MultirowComponent } from "./multirow.component";
import { MultirowRoutingModule } from "./multirow-routing.module";

@NgModule({
  declarations: [MultirowComponent],
  imports: [CommonModule, SharedModule, MaterialModule, MultirowRoutingModule],
})
export class MultirowModule {}
