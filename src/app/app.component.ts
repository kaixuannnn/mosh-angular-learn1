import { Component, Output } from '@angular/core';
import { FavouriteChangedEvent } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ];

  onAdd() {
    this.courses.push({ id: 4, name: 'course4' });
  }

  onRemove(course: { id: number; name: string }) {
    this.courses = this.courses.filter((item) => item.id !== course.id);
  }
}
