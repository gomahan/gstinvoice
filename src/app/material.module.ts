import { NgModule } from '@angular/core';


import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


const Mat =[MatGridListModule,MatButtonModule,MatFormFieldModule,MatInputModule];


@NgModule({
  imports: [
    Mat
  ],
  exports: [
    Mat
  ]
})
export class MaterialModule {}