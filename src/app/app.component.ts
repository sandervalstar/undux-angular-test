import { Component, OnInit } from '@angular/core';
import { createMyStore } from './app.store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  inputText = 'Changed Text';
  store = createMyStore();

  ngOnInit() {
  }

  changeTheButtonText() {
    this.store.set('buttonText')(this.inputText);
  }

}


