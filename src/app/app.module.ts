import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { WelcomComponent } from './welcom/welcom.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
