import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'undux';
import { MyStore } from '../app.store';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="store.set('clickCount')(store.get('clickCount') + 1)">
      {{store.get('buttonText')}}
    </button>`
})
export class ButtonComponent implements OnInit {

  @Input() store: Store<MyStore>;

  constructor() {
  }

  ngOnInit() {
  }

}
