import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarousalModuleComponent } from './carousal-module/carousal-module.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CarousalModuleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
