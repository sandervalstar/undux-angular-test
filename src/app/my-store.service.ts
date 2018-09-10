import { Injectable } from '@angular/core';
import {
  createStore,
  StoreDefinition,
  withLogger,
  withReduxDevtools,
  Options,
} from 'undux';
import { environment } from '../environments/environment';

export interface MyStore {
  buttonText: string;
  clickCount: number;
}

const INITIAL_STORE: MyStore = {
  buttonText: 'Click Me',
  clickCount: 0,
};

const STORE_OPTIONS: Options = {
  isDevMode: !environment.production,
};

export const myStoreFactory = () => {
  let result = createStore(INITIAL_STORE, STORE_OPTIONS);
  if (environment.useUnduxReduxDevTools) {
    result = withReduxDevtools(result);
  }
  if (environment.useUnduxLogger) {
    result = withLogger(result);
  }
  return result;
};

@Injectable({
  providedIn: 'root',
})
export class MyStoreService extends StoreDefinition<MyStore> {
  constructor() {
    super(
      {
        buttonText: "Don't Click Me", // this text should not appear, the factory should be used instead
        clickCount: 0,
      },
      {
        isDevMode: !environment.production,
      }
    );
  }
}
