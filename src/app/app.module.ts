import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {AlertModule, CarouselModule} from 'ngx-bootstrap';
import { FromcontrolComponent } from './fromcontrol/fromcontrol.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    FromcontrolComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    CarouselModule,
    ModalModule.forRoot(),
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
