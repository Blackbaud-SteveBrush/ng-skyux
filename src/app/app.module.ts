import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SkyPagingModule } from 'stevebrush-skyux-lists-test';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SkyPagingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
