import { Component, Output } from '@angular/core';
import { FavouriteChangedEvent } from './favourite/favourite.component';

interface course {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  canSave = false;
}
