import { Component, Output } from '@angular/core';
import { FavouriteChangedEvent } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  viewMode = 'map';
}
