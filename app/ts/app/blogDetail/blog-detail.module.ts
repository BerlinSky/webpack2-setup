import { NgModule } from '@angular/core';

import { BlogDetailComponent } from './blog-detail.component';
import  blogDetailRoutes  from './blog-detail.routes';

@NgModule({
  imports: [blogDetailRoutes],
  declarations: [BlogDetailComponent],
  exports: [BlogDetailComponent]
})

export class BlogDetailModule {}
