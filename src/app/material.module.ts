import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


const Mat =[BrowserAnimationsModule,MatGridListModule,MatButtonModule,MatFormFieldModule,MatInputModule];


@NgModule({
  imports: [
    Mat
  ],
  exports: [
    Mat
  ]
})
export class MaterialModule {}