import { Component, OnInit } from '@angular/core';
import { MarsImage } from '../shared/model/mars-image';
import { NasaApiService } from '../shared/services/nasa-api.service';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {
marsImage:MarsImage[];
  //inyección de dependencias
  constructor(private servicio:NasaApiService) { }

  ngOnInit() {
    this.servicio.getMarsImage().subscribe(result=>{
      this.marsImage=result.photos
    });
  }

}
