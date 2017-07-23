import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../adminShared/user.service';

@Component({
  templateUrl: './login.component.pug',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private userService: UserService, private router: Router) { }

  login() {
    this.userService.login(this.email, this.password);
    this.userService.verifyUser();
  }

  signup() {
    this.router.navigate(['/admin/signup']);
  }

  cancel() {
    this.router.navigate(['']);
  }
}
