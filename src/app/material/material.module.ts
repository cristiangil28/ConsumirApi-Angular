import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule,MatButtonModule,MatIconModule,MatExpansionModule,MatInputModule,MatListModule} 
from '@angular/material';

@NgModule({
  declarations: [
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class MaterialModule { }
