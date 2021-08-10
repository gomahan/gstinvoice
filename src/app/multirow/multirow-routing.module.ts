import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MultirowComponent } from './multirow.component';
import { Myproduct } from '../../assets/model/myproduct.schema';

const routes: Routes = [
    {
        path: 'Myproducts',
        component: MultirowComponent,
        data : {
            schemaClass : Myproduct,
            schemaClassString : "Myproduct",
            heading: 'My Products'
        }
      },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultirowRoutingModule {}
