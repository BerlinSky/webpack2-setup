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
  userLoggedIn: boolean;
  authUser: any;
  loggedInUser: any;

  constructor( private router: Router ) {
    const config = {
      apiKey: 'AIzaSyACCIkF3qnw2LFPTKY20ecMJRe0Tp-LlxY',
      authDomain: 'webpack2-angular4.firebaseapp.com',
      databaseURL: 'https://webpack2-angular4.firebaseio.com',
      projectId: 'webpack2-angular4',
      storageBucket: 'webpack2-angular4.appspot.com',
      messagingSenderId: '557354340230'
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

  register(email: string, password: string) {
    console.log('password', email, password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        console.log(`
          ${error.message} Please try it again.
        `)
      })
  }

  verifyUser() {
    this.authUser = firebase.auth().currentUser;

    console.log('user', this.authUser);

    if (this.authUser) {
      console.log(`
        Welcome ${this.authUser.email}
      `);
      this.loggedInUser = this.authUser.email;
      this.userLoggedIn = true;
      this.router.navigate(['/admin']);
    }
  }

  login(loginEmail: string, loginPassword: string) {
    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
      .catch(function(error) {
        console.log(`
          ${error.message} Unable to log in. Please try it again.
        `)
      })
  }

  logout() {
    this.userLoggedIn = false;
    firebase.auth().signOut().then(function() {
      console.log('Logged out');
    }, function(error) {
      console.log(`
        ${error.message} Unable to log out.  Please try it again.
      `);
    })
  }
}
