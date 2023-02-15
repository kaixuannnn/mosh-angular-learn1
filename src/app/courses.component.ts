import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: ` <input (keyup.enter)="onKeyUp()" /> `,
})
export class CoursesComponent {
  title = 'List of courses';
  courses = ['course1', 'course2', 'course3'];
  colspan = 2;
  isActive = true;

  // dependency injection
  constructor(service: CoursesService) {
    // let service = new CoursesService();
    this.courses = service.getCourses();
  }

  onDivSave() {
    console.log('Div is Clicked!');
  }

  // method
  onSave($event: Event) {
    // Without Stop Propagation, event bubbling will happen, when you click on on save, onDivSave will execute also
    // $event.stopPropagation();
    console.log('Button was clicked!', $event);
  }

  onKeyUp() {
    // old type
    // if ($event.keyCode === 13) console.log('Enter was pressed');
    console.log('Enter was pressed!');
  }
}
