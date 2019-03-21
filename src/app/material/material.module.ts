import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule,MatButtonModule,MatIconModule,MatExpansionModule,MatInputModule,MatListModule, MatProgressSpinnerModule} 
from '@angular/material';

@NgModule({
  declarations: [
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
})
export class MaterialModule { }
