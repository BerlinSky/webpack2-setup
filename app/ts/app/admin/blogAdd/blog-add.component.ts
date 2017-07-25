import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogAdminService } from '../adminShared/blog-admin.service';
import { Blog } from '../adminShared/blog';

@Component({
  selector: 'add-menu',
  templateUrl: './blog-add.component.pug'
})
export class BlogAddComponent {
  imgTitle: string;
  imageSrc: string;
  postTitle: string;
  postContent: string;
  post: Blog;

  constructor( private blogAdminService: BlogAdminService, private router: Router ) { }

  fileLoad($event: any) {
    const thisReader: FileReader = new FileReader();
    const file: File = $event.target.files[0];
    this.imgTitle = file.name;
    thisReader.readAsDataURL(file);

    thisReader.onload = (event: any) => {
      this.imageSrc = event.target.result;
    }
  }

  createPost() {
    this.post = new Blog (
      this.postTitle,
      this.postContent,
      this.imgTitle,
      this.imageSrc.substring(23)
    );

    this.blogAdminService.createPost(this.post);
    this.router.navigate(['/admin']);
  }

  cancel() {
    this.router.navigate(['/admin']);
  }
}
