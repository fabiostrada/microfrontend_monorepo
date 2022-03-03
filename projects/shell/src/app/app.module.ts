import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeShellComponent } from './components/home-shell/home-shell.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
