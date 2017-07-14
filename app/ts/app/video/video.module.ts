import { NgModule } from '@angular/core';

import { VideoComponent } from './video.component';
import  videoRoutes  from './video.routes';

@NgModule({
  imports: [videoRoutes],
  declarations: [VideoComponent],
  exports: [VideoComponent]
})

export class VideoModule {}
