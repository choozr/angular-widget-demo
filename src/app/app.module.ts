import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManComponent } from './man/man.component';
import { WomanComponent } from './woman/woman.component';

@NgModule({
  declarations: [
    AppComponent,
    ManComponent,
    WomanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
