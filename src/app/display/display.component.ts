import { Component, Input } from '@angular/core';
import { Store } from 'undux';
import { MyStore } from '../app.store';

@Component({
  selector: 'app-display',
  template: `<p>{{store.get('clickCount')}}</p>`,
})
export class DisplayComponent {

  @Input() store: Store<MyStore>;

  constructor() {
  }

}
