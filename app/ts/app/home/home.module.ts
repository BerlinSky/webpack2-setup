import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import  homeRoutes  from './home.routes';

import { LandingModule } from '../landing/landing.module';
import { SearchModule } from '../search/search.module';

@NgModule({
  imports: [homeRoutes, LandingModule, SearchModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})

export class HomeModule {}
