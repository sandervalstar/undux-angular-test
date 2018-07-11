import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule } from '@angular/forms';
import { DisplayServiceComponent } from './display-service/display-service.component';
import { MyStoreService } from './my-store.service';
import { ButtonServiceComponent } from './button-service/button-service.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DisplayComponent,
    DisplayServiceComponent,
    ButtonServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [MyStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
