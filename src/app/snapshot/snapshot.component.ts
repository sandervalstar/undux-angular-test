import { Component } from '@angular/core';
import { MyStoreService, MyStore } from '../my-store.service';
import { StoreSnapshot } from 'undux';

@Component({
  selector: 'app-snapshot',
  template: `
    <p>{{this.snapshot.get('clickCount')}}</p>
    <button (click)="takeSnapshot()">Take Snapshot</button>
    `,
})
export class SnapshotComponent {
  snapshot: StoreSnapshot<MyStore>;

  constructor(public store: MyStoreService) {
    this.snapshot = store.getCurrentSnapshot();
  }

  takeSnapshot() {
    this.snapshot = this.store.getCurrentSnapshot();
  }
}
