import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleSharedComponent } from './example-shared/example-shared.component';
import { ButtonSharedComponent } from './button-shared/button-shared.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleSharedComponent,
    ButtonSharedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
