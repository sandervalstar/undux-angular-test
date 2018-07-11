import { Component, Input } from '@angular/core';
import { Store } from 'undux';
import { MyStore } from '../app.store';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="store.set('clickCount')(store.get('clickCount') + 1)">
      {{store.get('buttonText')}}
    </button>`
})
export class ButtonComponent {

  @Input() store: Store<MyStore>;

  constructor() {
  }

}
