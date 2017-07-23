import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

import { UserService } from '../adminShared/user.service';
import { BlogAdminService } from '../adminShared/blog-admin.service';
import { Blog } from '../adminShared/blog';

@Component({
  templateUrl: './blog-admin.component.pug',
  styleUrls: ['./blog-admin.component.scss']
})
export class BlogAdminComponent implements OnInit {
  currentUser: string;
  menuChoice: string;
  blogPost: Blog[];

  constructor(
    private userService: UserService,
    private router: Router,
    private blogAdminService: BlogAdminService
  ) {}

  ngOnInit() {
    this.currentUser = this.userService.loggedInUser;
    this.getPost();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

  chooseMode(mode: string) {
    this.menuChoice = mode;
  }

  getPost() {
    const dbRef = firebase.database().ref('blogPost/');
    dbRef.once('value')
      .then((snapshot) => {
        const temp: string[] = snapshot.val();
        this.blogPost = Object.keys(temp).map(key => temp[key])
      });
  }
}
