import { Routes, RouterModule } from '@angular/router';

import { BlogDetailComponent } from './blog-detail.component'

const routes: Routes = [
  {path: 'blog-detail/:id', component: BlogDetailComponent}
]

export default RouterModule.forChild(routes);
