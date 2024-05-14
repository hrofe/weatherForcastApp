import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRoutingModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
