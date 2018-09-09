import { Component, OnInit } from '@angular/core';
import { MyStoreService } from './my-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  inputText = 'Changed Text';

  constructor(public store: MyStoreService) {}

  ngOnInit() {}

  changeTheButtonText() {
    this.store.set('buttonText')(this.inputText);
  }
}
