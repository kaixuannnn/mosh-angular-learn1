import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mosh-angular-learn1';
  post = {
    title: 'Title',
    isFavourite: true,
  };
}
