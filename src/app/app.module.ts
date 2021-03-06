
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';



// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { HomeModule } from './home/home.module';
import { SingleformModule } from './singleform/singleform.module';
import { MultirowModule } from './multirow/multirow.module';
import { InvoiceModule } from './invoice/invoice.module';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InvoicetableModule } from './invoicetable/invoicetable.module';


// AoT requires an exported function for factories
const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader =>  new TranslateHttpLoader(http, './assets/i18n/', '.json');



@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule,
    SingleformModule,
    MultirowModule,
    InvoiceModule,
    InvoicetableModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
