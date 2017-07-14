import { Routes, RouterModule } from '@angular/router';

import { MusicComponent } from './music.component'

const routes: Routes = [
  {path: '', component: MusicComponent},
  {path: 'music', component: MusicComponent}
]

export default RouterModule.forChild(routes);
