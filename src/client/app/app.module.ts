import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './components/default.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, DefaultComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}