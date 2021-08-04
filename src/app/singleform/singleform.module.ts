import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';


import { SingleformRoutingModule } from './singleform-routing.module';
import { SingleformComponent } from './singleform.component';

@NgModule({
  declarations: [SingleformComponent,],
  imports: [CommonModule, SharedModule,MaterialModule,SingleformRoutingModule,]
})
export class SingleformModule {}
