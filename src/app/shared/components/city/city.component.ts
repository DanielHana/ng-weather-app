import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  @Input() icon: string;
  @Input() degrees: string;
  @Input() date: string;

  constructor() { }

  ngOnInit() {
  }

}
