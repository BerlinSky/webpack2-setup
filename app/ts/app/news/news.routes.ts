import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news.component'

const routes: Routes = [
  {path: '', component: NewsComponent},
  {path: 'news', component: NewsComponent}
]

export default RouterModule.forChild(routes);
