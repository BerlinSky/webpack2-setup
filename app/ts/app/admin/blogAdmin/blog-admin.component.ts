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
  blogPosts: Blog[];
  formDisplay: boolean;
  singlePost: Blog;

  constructor(
    private userService: UserService,
    private router: Router,
    private blogAdminService: BlogAdminService
  ) {}

  async ngOnInit() {
    this.formDisplay = true;

    this.currentUser = this.userService.loggedInUser;

    this.blogPosts = await this.blogAdminService.getPosts();
    console.log('this blogPost', this.blogPosts);
  }



  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

  chooseMode(mode: string) {
    this.menuChoice = mode;

    console.log('menuChoice', this.menuChoice);
  }

  editPost(post: Blog) {
    this.singlePost = post;
    this.formDisplay = false;
  }

  cancelEdit() {
    this.formDisplay = true;
  }

  updatePost(post: Blog) {
    this.blogAdminService.editPost(post);
    this.formDisplay = true;
  }

  deletePost(post: Blog) {
    const verify = confirm(`Are you sure you want to remove this post?`);
    if (verify) {
      this.blogAdminService.removePost(post);
    } else {
      console.log('Delete request is not confirm!');
    }

  }
}
