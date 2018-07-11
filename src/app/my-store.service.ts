import { Injectable } from '@angular/core';
import { MyStore } from './app.store';
import { StoreDefinition } from 'undux';

@Injectable({
  providedIn: 'root'
})
export class MyStoreService extends StoreDefinition<MyStore> {

  constructor() {
    super({
      buttonText: 'Click Me',
      clickCount: -1
    }, {
      isDevMode: false
    });
  }

}
