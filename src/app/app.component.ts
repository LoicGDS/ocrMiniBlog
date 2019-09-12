import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mini Blog Angular';

	// Tableau des Posts
  postList = [
    {
      title: 'Premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      loveIts : 0,
      createdAt : new Date('2018-12-17T13:52:00')
    },
    {
      title: 'Second post',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      loveIts : 3,
      createdAt : new Date('2018-12-17T03:24:00')
    },
    {
      title: 'Nouveau post',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      loveIts : -2,
      createdAt :  new Date('2019-02-27T08:16:00')
    },
    {
      title: 'Dernier post',
      content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      loveIts : 1,
      createdAt :  new Date('2019-09-05T15:37:00')
    }
  ]
}
