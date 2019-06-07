import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.scss']
})
export class PlusComponent implements OnInit {

  @Input() klass: string;
  constructor() { }

  ngOnInit() {
  }

}
