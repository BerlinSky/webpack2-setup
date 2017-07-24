import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar.navbar',
  templateUrl: './navbar.component.pug'
})

export class NavbarComponent {
  menuItems = [
    { url: 'home', itemText: 'Home'},
    { url: 'news', itemText: 'News'},
    { url: 'tour', itemText: 'Tour'},
    { url: 'video', itemText: 'Video'},
    { url: 'music', itemText: 'Music'},
    { url: 'admin', itemText: 'Admin'},
  ];
}
