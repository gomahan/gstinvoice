import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [CommonModule, TranslateModule, FormsModule,ReactiveFormsModule,BrowserModule,BrowserAnimationsModule,],
  exports: [TranslateModule, WebviewDirective, FormsModule,ReactiveFormsModule,BrowserModule,BrowserAnimationsModule,]
})
export class SharedModule {}
