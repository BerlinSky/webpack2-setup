import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import appRoutes from './app.routes';

import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';
import { ServicesModule } from './services/services.module';
import { HomeComponent } from './home/home.component';
// import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [BrowserModule, ContactModule, ServicesModule.forRoot(), appRoutes],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
