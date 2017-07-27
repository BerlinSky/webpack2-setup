import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsComponent } from './news.component';
import  newsRoutes  from './news.routes';
import { BlogAdminService } from '../admin/adminShared/blog-admin.service';

@NgModule({
  imports: [CommonModule, newsRoutes],
  declarations: [NewsComponent],
  exports: [NewsComponent],
  providers: [
    BlogAdminService
  ]
})

export class NewsModule {}
