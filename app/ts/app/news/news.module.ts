import { NgModule } from '@angular/core';

import { NewsComponent } from './news.component';
import  newsRoutes  from './news.routes';

@NgModule({
  imports: [newsRoutes],
  declarations: [NewsComponent],
  exports: [NewsComponent]
})

export class NewsModule {}
