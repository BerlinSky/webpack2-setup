import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import { Blog } from './blog';

@Injectable()
export class BlogAdminService {

  createPost(post: Blog) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`image/${post.imgTitle}`).putString(post.img, 'base64')
      .then((snapshot) => {
        const url = snapshot.metadata.downloadURLs[0];
        const dbRef = firebase.database().ref('blockPosts/');
        const newPost = dbRef.push();

        newPost.set({
          title: post.title,
          content: post.content,
          imgTitle: post.imgTitle,
          img: url,
          id: newPost.key
        })
      })
      .catch((error) => {
        console.log(`${error} post failed`);
      });
  }
}
