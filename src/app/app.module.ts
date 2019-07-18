import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { FormsModule } from '@angular/forms';
import {AlertModule, CarouselModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    CarouselModule,
    ModalModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
