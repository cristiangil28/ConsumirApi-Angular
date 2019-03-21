import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';
import { NasaApiService } from '../shared/services/nasa-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  error:string;
  apod:Apod;
  /*se inyecta la clase al constructor*/
  constructor(private nasaApi:NasaApiService) { }

  ngOnInit() {
    this.nasaApi.getApod().subscribe((data:Apod)=>{
      setTimeout(()=>{
        this.apod=data;
      },2000);
      },error=>{
        setTimeout(()=>{
          this.error='error al conectar con el servidor';
        },2000);
        
      });
  }

}
