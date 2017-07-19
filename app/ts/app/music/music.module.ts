import { NgModule } from '@angular/core';

import { MusicComponent } from './music.component';
import { MusicDirective } from './music.directive';
import  musicRoutes  from './music.routes';

@NgModule({
  imports: [musicRoutes],
  declarations: [MusicComponent, MusicDirective],
  exports: [MusicComponent]
})

export class MusicModule {}
