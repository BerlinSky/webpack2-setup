import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import appRoutes from './app.routes';

import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { HomeModule } from './home/home.module';
import { NewsModule } from './news/news.module';
import { TourModule } from './tour/tour.module';
import { VideoModule } from './video/video.module';
import { MusicModule } from './music/music.module';

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    NewsModule,
    TourModule,
    VideoModule,
    MusicModule,
    ServicesModule.forRoot(),
    appRoutes
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
