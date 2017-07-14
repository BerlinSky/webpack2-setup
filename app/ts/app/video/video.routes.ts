import { Routes, RouterModule } from '@angular/router';

import { VideoComponent } from './video.component'

const routes: Routes = [
  {path: '', component: VideoComponent},
  {path: 'video', component: VideoComponent}
]

export default RouterModule.forChild(routes);
