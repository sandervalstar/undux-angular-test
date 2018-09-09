import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule } from '@angular/forms';
import { MyStoreService } from './my-store.service';

@NgModule({
  declarations: [AppComponent, ButtonComponent, DisplayComponent],
  imports: [BrowserModule, FormsModule],
  providers: [MyStoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
