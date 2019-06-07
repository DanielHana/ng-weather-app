import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  apiKey = '&units=imperial&appid=7368cd9c634c86465f0c6542a47a6054';

  constructor(private http: HttpClient, private tService: ToastService) { }

  getForecast() {

  }

  getURL(url: string): Observable<any> {
    return this.http.get<any>(this.apiURL + url + this.apiKey);
  }
}
