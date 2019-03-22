import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { NasaApiService } from './shared/services/nasa-api.service';
import { LoweCasePipe } from './shared/pipes/lowe-case.pipe';
import { HttpClientModule} from '@angular/common/http';
import { MarsModule } from './mars/mars.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoweCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MarsModule
  ],
  /* en providers es donde se van a definir las clases que van a ser inyectadas*/
  providers: [NasaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
