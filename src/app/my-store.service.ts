import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { StoreDefinition } from 'undux';

interface MyStore {
  buttonText: string;
  clickCount: number;
}

@Injectable({
  providedIn: 'root',
})
export class MyStoreService extends StoreDefinition<MyStore> {
  constructor() {
    super(
      {
        buttonText: 'Click Me',
        clickCount: 0,
      },
      {
        isDevMode: !environment.production,
      }
    );
  }
}
