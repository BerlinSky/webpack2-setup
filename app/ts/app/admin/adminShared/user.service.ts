import { Injectable } from '@angular/core';

import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import * as firebase from 'firebase';

@Injectable()
export class UserService implements CanActivate {
  userLoggedIn: false;

  constructor( private router: Router ) {
    const config = {
      apiKey: "AIzaSyACCIkF3qnw2LFPTKY20ecMJRe0Tp-LlxY",
      authDomain: "webpack2-angular4.firebaseapp.com",
      databaseURL: "https://webpack2-angular4.firebaseio.com",
      projectId: "webpack2-angular4",
      storageBucket: "webpack2-angular4.appspot.com",
      messagingSenderId: "557354340230"
    };
    firebase.initializeApp(config);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.verifyLogin(url);
  }

  verifyLogin(url: string): boolean {
    if (this.userLoggedIn) {
      return true;
    }

    this.router.navigate(['/admin/login']);
    return false;
  }

}
