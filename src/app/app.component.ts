import { Component, OnInit } from '@angular/core';
import { createMyStore } from './app.store';
import { MyStoreService } from './my-store.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  inputText = 'Changed Text';
  store = createMyStore();

  constructor(public myStoreService: MyStoreService) {
  }

  ngOnInit() {
  }

  changeTheButtonText() {
    this.store.set('buttonText')(this.inputText);
    this.myStoreService.set('buttonText')(this.inputText);
  }

}


