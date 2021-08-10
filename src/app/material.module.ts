import { NgModule } from "@angular/core";

import { MatSliderModule } from "@angular/material/slider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from '@angular/material/table';

const Mat = [
  MatSliderModule,
  MatGridListModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatTableModule,
];

@NgModule({
  imports: [Mat],
  exports: [Mat],
})
export class MaterialModule {}
