import { NgModule } from '@angular/core';

import appRoutes from '../../app.routes';

import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [appRoutes],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})

export class NavbarModule {}
