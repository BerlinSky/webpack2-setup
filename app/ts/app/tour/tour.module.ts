import { NgModule } from '@angular/core';

import { TourComponent } from './tour.component';
import  tourRoutes  from './tour.routes';

@NgModule({
  imports: [tourRoutes],
  declarations: [TourComponent],
  exports: [TourComponent]
})

export class TourModule {}
