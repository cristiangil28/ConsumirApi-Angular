import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';
import {HttpClient} from '@angular/common/http';
import {  Observable } from 'rxjs';

const APDO_URL='https://api.nasa.gov/planetary/apod';
const API_KEY='DEMO_KEY';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  
  //inyector de dependencia: HTTPCLIENT
  constructor(private httpClient: HttpClient) { }

  getApod():Observable<Apod>{
    //return this.Data;
    //concatenación con el operador +
    //return this.httpClient.get<Apod>(APDO_URL+'?api_key='+API_KEY)
    //usando template literals
    return this.httpClient.get<Apod>(`${APDO_URL}?api_key=${API_KEY}`);
  }
}
