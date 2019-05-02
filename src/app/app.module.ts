import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { TimeCountPipe } from './time-count.pipe';

import { TimeAgoPipe } from 'time-ago-pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    TimeCountPipe,
    TimeAgoPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
