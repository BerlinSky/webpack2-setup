import { NgModule } from '@angular/core';

import { MusicComponent } from './music.component';
import { MusicDirective } from './music.directive';

import { LyricsModule } from './lyrics/lyrics.module';
import { LyricsDirective } from './lyrics/lyrics.directive';

import  musicRoutes  from './music.routes';

@NgModule({
  imports: [musicRoutes, LyricsModule],
  declarations: [MusicComponent, MusicDirective, LyricsDirective],
  exports: [MusicComponent]
})

export class MusicModule {}
