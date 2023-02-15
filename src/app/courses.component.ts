import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: ` <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />`,
})
export class CoursesComponent {
  email = 'me@example.com';

  onKeyUp() {
    // old type
    // if ($event.keyCode === 13) console.log('Enter was pressed');
    console.log('Enter was pressed!', this.email);
  }
}
