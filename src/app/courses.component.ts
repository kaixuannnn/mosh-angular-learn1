import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `<h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <img [src]="title" />
    <table>
      <tr>
        <td [attr.colspan]="colspan"></td>
      </tr>
    </table>
    <button class="btn btn-primary">Save</button>`,
})
export class CoursesComponent {
  title = 'List of courses';
  courses = ['course1', 'course2', 'course3'];
  colspan = 2;

  // dependency injection
  constructor(service: CoursesService) {
    // let service = new CoursesService();
    this.courses = service.getCourses();
  }
}
