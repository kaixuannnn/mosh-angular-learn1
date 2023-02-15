import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    {{ course.title | uppercase | lowercase }} <br />
    {{ course.students | number }} <br />
    {{ course.rating | number : '1.2-2' }}<br />
    {{ course.price | currency : 'SGD' : true : '3.2-2' }} <br />
    {{ course.releaseDate | date : 'shortDate' }}
  `,
})
export class CoursesComponent {
  course = {
    title: 'The Complete Angular Course',
    rating: 4.7684,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1),
  };
}
