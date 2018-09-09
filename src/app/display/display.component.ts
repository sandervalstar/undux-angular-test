import { Component } from '@angular/core';
import { MyStoreService } from '../my-store.service';

@Component({
  selector: 'app-display',
  template: `<p>{{store.get('clickCount')}}</p>`,
})
export class DisplayComponent {
  constructor(public store: MyStoreService) {}
}
