import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes = [
  { path: '', component: HomeComponent }
];

export default RouterModule.forRoot(routes);
