import { NgModule } from '@angular/core';

import { MusicComponent } from './music.component';
import  musicRoutes  from './music.routes';

@NgModule({
  imports: [musicRoutes],
  declarations: [MusicComponent],
  exports: [MusicComponent]
})

export class MusicModule {}
