import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ButtonSharedComponent} from '../../../library/src/app/button-shared/button-shared.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonSharedComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
