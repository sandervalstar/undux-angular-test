import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'undux';
import { MyStore } from '../app.store';

@Component({
  selector: 'app-display',
  template: `<p>{{store.get('clickCount')}}</p>`,
})
export class DisplayComponent implements OnInit {

  @Input() store: Store<MyStore>;

  constructor() {
  }

  ngOnInit() {
  }

}
