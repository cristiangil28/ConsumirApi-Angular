import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarsComponent } from './mars.component';
import { MaterialModule } from '../material/material.module';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [MarsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatCardModule
  ]
})
export class MarsModule { }
