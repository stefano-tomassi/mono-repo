import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Ng2SmartTableModule} from "ng2-smart-table";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    Ng2SmartTableModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
