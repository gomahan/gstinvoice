import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';


import { MybusinessRoutingModule } from './mybusiness-routing.module';
import { MybusinessComponent } from './mybusiness.component';

@NgModule({
  declarations: [MybusinessComponent],
  imports: [CommonModule, SharedModule,MaterialModule,MybusinessRoutingModule,]
})
export class MybusinessModule {}
