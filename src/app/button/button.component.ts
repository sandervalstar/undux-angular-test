import { Component } from '@angular/core';
import { MyStoreService } from '../my-store.service';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="incrementClickCount()">
      {{store.get('buttonText')}}
    </button>`,
})
export class ButtonComponent {
  constructor(public store: MyStoreService) {}

  incrementClickCount() {
    this.store.set('clickCount')(this.store.get('clickCount') + 1);
  }
}
