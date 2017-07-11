import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  imports: [BrowserModule, ContactModule, ServicesModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
