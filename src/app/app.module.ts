import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { DisplayComponent } from './display/display.component';
import { myStoreFactory, MyStoreService } from './my-store.service';

@NgModule({
  declarations: [AppComponent, ButtonComponent, DisplayComponent],
  imports: [BrowserModule, FormsModule],
  providers: [{ provide: MyStoreService, useFactory: myStoreFactory }],
  bootstrap: [AppComponent],
})
export class AppModule {}
