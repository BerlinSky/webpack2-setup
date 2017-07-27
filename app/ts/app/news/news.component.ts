import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Blog } from '../admin/adminShared/blog';
import { BlogAdminService } from '../admin/adminShared/blog-admin.service';

@Component({
  selector: 'news-page',
  templateUrl: './news.component.pug',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  blogPosts: Blog[];

  constructor(
    private blogAdminService: BlogAdminService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.blogPosts = await this.blogAdminService.getPosts();

    console.log('this blogPost??', this.blogPosts);
  }

  selectPost(post: Blog) {
    this.router.navigate(['/post', post.id])
  }
}

