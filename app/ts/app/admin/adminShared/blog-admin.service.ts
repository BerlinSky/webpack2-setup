import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import { Blog } from './blog';

@Injectable()
export class BlogAdminService {

  createPost(post: Blog) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`images/${post.imgTitle}`).putString(post.img, 'base64')
      .then((snapshot) => {
        const url = snapshot.metadata.downloadURLs[0];
        const dbRef = firebase.database().ref('blogPosts/');
        const newPost = dbRef.push();

        console.log('post', post);

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

  editPost(post: Blog) {
    const dbRef = firebase.database().ref('blogPosts/').child(post.id)
      .update({
        title: post.title,
        content: post.content
      });

    console.log('post updated successfully');
  }

  removePost(post: Blog) {
    const dbRef = firebase.database().ref('blogPosts/').child(post.id).remove();
    console.log('post removed successfully');

    const imageRef = firebase.storage().ref().child(`images/${post.imgTitle}`)
      .delete()
        .then(function() {
          console.log(`${post.imgTitle} was deleted successfully`);
        }).catch(function(error) {
          console.log(`${post.imgTitle} was not deleted failed ${error}`);
        })
  }

  getPosts() {
    const dbRef = firebase.database().ref('blogPosts/');

    return dbRef.once('value')
      .then((snapshot) => {
          let tmp: string[] = snapshot.val();
          const blogPosts = Object.keys(tmp).map(key => tmp[key]);
          return blogPosts;
      });
  }
}

