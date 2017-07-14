import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { TourComponent } from './tour/tour.component';
import { VideoComponent } from './video/video.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  // { path: 'home', component: HomeComponent },
  // { path: 'home', loadChildren: 'app/home/home.module' },
  { path: 'news', component: NewsComponent },
  { path: 'tour', component: TourComponent },
  { path: 'video', component: VideoComponent },
  { path: 'music', component: MusicComponent },
];

export default RouterModule.forRoot(routes);
