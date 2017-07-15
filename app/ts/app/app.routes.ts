import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'news', loadChildren: './news/news.module#NewsModule' },
  { path: 'tour', loadChildren: './tour/tour.module#TourModule' },
  { path: 'video', loadChildren: './video/video.module#VideoModule' },
  { path: 'music', loadChildren: './music/music.module#MusicModule' }
];

export default RouterModule.forRoot(routes);
