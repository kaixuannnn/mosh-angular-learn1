import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: ` {{ text | summary : 10 }} `,
})
export class CoursesComponent {
  text = `Exercitation ipsum laborum non velit tempor consectetur duis consectetur irure labore cupidatat. Duis nisi ut id anim nisi occaecat est sint enim duis. Cupidatat occaecat incididunt qui ad aliquip Lorem commodo. Ullamco qui sunt pariatur non. In proident nostrud aliquip id exercitation amet anim dolor minim laborum aliqua.`;
}
