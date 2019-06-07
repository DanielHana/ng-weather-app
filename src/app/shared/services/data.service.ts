import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private aService: ApiService) { }

  getData(city) {
    const newCity = this.aService.makeCall(city);
    console.log(newCity);
  }
}
