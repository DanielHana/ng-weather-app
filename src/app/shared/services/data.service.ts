import { Injectable, OnDestroy } from '@angular/core';
import { ApiService } from './api.service';
import { Subscription } from 'rxjs';
import { Container } from 'src/app/models/container';
import { ToastService } from './toast.service';


@Injectable({
  providedIn: 'root'
})
export class DataService implements OnDestroy {

  sub: Subscription;
  cInfo: Container;
  cityList: Container[] = [];

  constructor(private aService: ApiService, private tService: ToastService) { }

  getData(city) {
    this.sub = this.aService.getURL(city).subscribe(
      x => {
        if (this.cityList.filter(e => e.sys.id === x.sys.id).length < 1) {
          console.log(x);
          this.cityList.push(x);
          console.log(this.cityList);
          this.tService.showSuccess('City Added!');
        } else {
          this.tService.showWarn('City already added');
        }
      }, error => {
          this.tService.showError('City Not Found');
      }
    );
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
