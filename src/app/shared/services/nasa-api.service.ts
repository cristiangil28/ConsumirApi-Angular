import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  private readonly Data:Apod={
    date:'2019-03-18',
    explanation:'The dark Horsehead Nebula and the glowing Orion Nebula are contrasting cosmic vistas. Adrift 1,500 light-years away in one of the night skys most recognizable constellations, they appear in opposite corners of the above stunning two-panel mosaic. The familiar Horsehead nebula appears as a dark cloud on the lower left, a small silhouette notched against the glow of hydrogen (alpha) gas, here tinted orange. Alnitak is the easternmost star in Orions belt and can be found to the left of the Horsehead. Below Alnitak is the Flame Nebula, with clouds of bright emission and dramatic dark dust lanes. The magnificent emission region, the Orion Nebula (aka M42), lies at the upper right, surrounded by the blue glow of reflecting dust. Immediately to its left is a prominent reflection nebula sometimes called the Running Man. Pervasive tendrils of glowing hydrogen gas are easily traced throughout the region',
    hdurl:'https://apod.nasa.gov/apod/image/1903/Horsehead2Nebula_Zauner_14173.jpg',
    media_type:'image',
    service_version:'v1',
    title:'Discover the cosmos!',
    url:'https://apod.nasa.gov/apod/image/1903/Horsehead2Nebula_Zauner_14173.jpg'
  };
  constructor() { }

  getApod():Apod{
    return this.Data;
  }
}
