import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'home', component: HomeComponent}
]

export default RouterModule.forChild(routes);
