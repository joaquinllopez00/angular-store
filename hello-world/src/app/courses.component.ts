import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: ` <h1>Courses</h1> `,
})
export class CoursesComponent {
  active = false;
}
