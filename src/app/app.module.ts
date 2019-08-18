import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyQuotesComponent } from './my-quotes/my-quotes.component';
import { MyQuoteDetailsComponent } from './my-quote-details/my-quote-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyQuotesComponent,
    MyQuoteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
