import { createStore, Store } from 'undux';

export type MyStore = {
  buttonText: string,
  clickCount: number
};

export function createMyStore(): Store<MyStore> {
  return createStore<MyStore>({
    buttonText: 'Click Me',
    clickCount: 0
  });
}
