import { Component } from '@angular/core';
import { MyStoreService } from '../my-store.service';

@Component({
  selector: 'app-display-using-service',
  template: `<p>{{store.get('clickCount')}}</p>`,
})
export class DisplayServiceComponent {

  constructor(public store: MyStoreService) {
  }

}
