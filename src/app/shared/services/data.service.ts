import { Injectable, OnDestroy } from '@angular/core';
import { ApiService } from './api.service';
import { Subscription } from 'rxjs';
import { Container } from 'src/app/models/container';


@Injectable({
  providedIn: 'root'
})
export class DataService implements OnDestroy {

  sub: Subscription;
  cInfo: Container;
  cityList: Container[] = [];

  constructor(private aService: ApiService) { }

  getData(city) {
    this.sub = this.aService.getURL(city).subscribe(
      x => {
        this.cityList.push(x);
        console.log(this.cityList);
      }
    );
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
