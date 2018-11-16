import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselModuleComponent } from './carousel-module/carousel-module.component';
import { HttpModule } from '@angular/http';
import {ApiCallsService} from './api-calls.service';

@NgModule({
  declarations: [
    AppComponent,
    CarouselModuleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ApiCallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
