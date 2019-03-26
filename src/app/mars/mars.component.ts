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
cameras:string[]=['MAST','CHEMCAM','NAVCAM'];
currentCamera:string;
  //inyección de dependencias
  constructor(private servicio:NasaApiService) { }

  ngOnInit() {
    this.currentCamera=this.cameras[0];
    this.refreshView(this.currentCamera);
  }
  onSelectCamera(camera:string){
    this.refreshView(camera);
  }
  private refreshView(camera:string){
    this.servicio.getMarsImage('CHEMCAM').subscribe(result=>{
      this.marsImage=result.photos;
    });
  }
}
