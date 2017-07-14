import { Routes, RouterModule } from '@angular/router';

import { TourComponent } from './tour.component'

const routes: Routes = [
  {path: '', component: TourComponent},
  {path: 'tour', component: TourComponent}
]

export default RouterModule.forChild(routes);
