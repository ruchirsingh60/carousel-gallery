import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarousalModuleComponent } from './carousal-module/carousal-module.component';

@NgModule({
  declarations: [
    AppComponent,
    CarousalModuleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
