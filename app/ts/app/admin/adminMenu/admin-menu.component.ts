import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../adminShared/user.service';


@Component({
  templateUrl: './admin-menu.component.pug',
   styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent {
  currentUser: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.userService.loggedInUser;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}


