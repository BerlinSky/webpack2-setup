import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import appRoutes from '../../app.routes';

import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [appRoutes, CommonModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})

export class NavbarModule {}
