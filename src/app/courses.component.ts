import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `<h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <div (click)="onDivSave()">
      <button
        class="btn btn-primary"
        [class.active]="isActive"
        (click)="onSave($event)"
        [style.backgroundColor]="isActive ? 'green' : 'white'"
      >
        Save
      </button>
    </div> `,
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
  onSave($event: MouseEvent) {
    // Without Stop Propagation, event bubbling will happen, when you click on on save, onDivSave will execute also
    // $event.stopPropagation();
    console.log('Button was clicked!', $event);
  }
}
