import { Component } from '@angular/core';

@Component({
  selector: 'app-udemy-courses',
  templateUrl: './udemy-courses.component.html',
  styleUrls: ['./udemy-courses.component.css'],
})
export class UdemyCoursesComponent {
  categories = [
    {
      id: 1,
      name: 'development',
    },
    {
      id: 2,
      name: 'art',
    },
    {
      id: 3,
      name: 'languages',
    },
  ];
  submit(f: any) {
    console.log('submit', f);
  }
}
