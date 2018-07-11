import { Component } from '@angular/core';
import { MyStoreService } from '../my-store.service';

@Component({
  selector: 'app-button-using-service',
  template: `
    <button (click)="store.set('clickCount')(store.get('clickCount') + 1)">
      {{store.get('buttonText')}}
    </button>`
})
export class ButtonServiceComponent {

  constructor(public store: MyStoreService) {
  }

}
