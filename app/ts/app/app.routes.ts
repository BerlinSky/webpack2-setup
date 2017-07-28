import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'news', loadChildren: './news/news.module#NewsModule' },
  { path: 'tour', loadChildren: './tour/tour.module#TourModule' },
  { path: 'video', loadChildren: './video/video.module#VideoModule' },
  { path: 'music', loadChildren: './music/music.module#MusicModule' },
  { path: 'blog-detail', loadChildren: './blogDetail/blog-detail.module#BlogDetailModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
];

export default RouterModule.forRoot(routes);
