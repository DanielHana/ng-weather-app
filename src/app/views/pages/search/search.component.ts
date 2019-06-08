import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  city: string;
  constructor(private dService: DataService) { }

  ngOnInit() {
  }

  newCity() {
    this.dService.getData(this.city);
    this.city = '';
  }
}
