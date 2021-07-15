import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MybusinessRoutingModule } from './mybusiness-routing.module';

import { MybusinessComponent } from './mybusiness.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [MybusinessComponent],
  imports: [CommonModule, SharedModule, MybusinessRoutingModule,MaterialModule]
})
export class MybusinessModule {}
