import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent {
  @Input('is-favourite') favourite = false;
  @Output() change = new EventEmitter();
  onClick() {
    this.favourite = !this.favourite;
    this.change.emit();
  }
}
