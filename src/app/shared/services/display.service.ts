import { Injectable } from '@angular/core';
import { WeatherList } from 'src/app/models/weather-list';
import { Subject } from 'rxjs';
import { ToastService } from './toast.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  defaultCity: WeatherList = {
    daily: {
      main: {
        temp: 0,
        temp_max: 0,
        temp_min: 0
      },
      name: 'Add a City',
      sys: {
        id: 0
      }
    },
    forecast: []
  };

  weathList: WeatherList[] = [];
  displayCities$  = new Subject<any>();
  count = 0;

  constructor(private tService: ToastService, private sService: StorageService) { }

  addInfo(info: WeatherList) {
    // checks ID of info being added to array
    // if array already contains ID the city is already in the list.
    if (this.weathList.filter(e => e.daily.sys.id === info.daily.sys.id).length < 1) {
      this.weathList.push(info);
      this.sService.addToStorage(this.weathList);
    }
    info.daily.main.temp_max = Math.round(info.daily.main.temp_max);
    info.daily.main.temp_min = Math.round(info.daily.main.temp_min);
    this.displayCities$.next(this.weathList[this.count]);
  }

  scroll(direction: number) {
    // right = 1, left = -1
    if (this.weathList[this.count + direction]) {
      this.count += direction;
      this.displayCities$.next(this.weathList[this.count]);
    }
  }

  removeCity() {
    this.weathList.splice(this.count, 1);
    this.sService.addToStorage(this.weathList);
    this.count = 0;
    if (this.weathList[0]) {
      this.displayCities$.next(this.weathList[this.count]);
    } else {
      this.displayCities$.next(this.defaultCity);
    }
  }
}
