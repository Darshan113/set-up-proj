import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TestComponent } from './test/test.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
