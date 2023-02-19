import { Component, Output } from '@angular/core';
import { FavouriteChangedEvent } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mosh-angular-learn1';
  post = {
    title: 'Title',
    isFavourite: false,
  };

  tweet = {
    likesCount: 0,
    isLiked: true,
  };

  onLikeChange(event: any) {
    console.log('Like Change');
  }

  onFavouriteChange(event: FavouriteChangedEvent) {
    console.log('Favourite Change', event);
  }
}
