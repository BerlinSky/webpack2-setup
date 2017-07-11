import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactModule } from './Contact/contact.module';

@NgModule({
  imports: [BrowserModule, ContactModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
