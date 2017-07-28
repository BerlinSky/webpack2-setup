import { Routes, RouterModule } from '@angular/router';

import { BlogDetailComponent } from './blog-detail.component'

const routes: Routes = [
  {path: '', component: BlogDetailComponent},
  {path: 'blog-detail', component: BlogDetailComponent}
]

export default RouterModule.forChild(routes);
