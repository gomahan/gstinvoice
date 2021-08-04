import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent,],
  imports: [CommonModule, SharedModule,MaterialModule,HomeRoutingModule,]
})
export class HomeModule {}
