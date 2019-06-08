import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // For single day
  apiD = 'https://api.openweathermap.org/data/2.5/weather?q=';

  // For forecast
  apiF = 'https://api.openweathermap.org/data/2.5/forecast?q=';

  apiKey = '&units=imperial&appid=7368cd9c634c86465f0c6542a47a6054';

  constructor(private http: HttpClient, private tService: ToastService) { }

  getForecast(url: string): Observable<any> {
    return this.http.get<any>(this.apiF + url + this.apiKey);
  }

  getURL(url: string): Observable<any> {
    return this.http.get<any>(this.apiD + url + this.apiKey);
  }
}
