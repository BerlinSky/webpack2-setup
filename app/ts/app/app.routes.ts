import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { NewsComponent } from './news/news.component';
// import { TourComponent } from './tour/tour.component';
// import { VideoComponent } from './video/video.component';
// import { MusicComponent } from './music/music.component';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  // { path: 'home', component: HomeComponent },
  // { path: 'home', loadChildren: 'app/home/home.module' },
  // { path: 'news', component: NewsComponent },
  { path: 'news', loadChildren: './news/news.module#NewsModule' },
  // { path: 'tour', component: TourComponent },
  { path: 'tour', loadChildren: './tour/tour.module#TourModule' },
  // { path: 'video', component: VideoComponent },
  { path: 'video', loadChildren: './video/video.module#TourModule' },
  // { path: 'music', component: MusicComponent },
  { path: 'music', loadChildren: './music/music.module#TourModule' }
];

export default RouterModule.forRoot(routes);
