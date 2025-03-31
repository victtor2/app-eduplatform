import { Component } from '@angular/core';
import { Course } from '../../types/courses';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../services/courses/course.service';

@Component({
    selector: 'app-videos',
    imports: [RouterLink],
    templateUrl: './videos.component.html',
    styleUrl: './videos.component.css'
})
export class VideosComponent {

  course: Course | undefined;
  //courseId: number=0;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService ) {}

  ngOnInit() {
     this.activatedRoute.params.subscribe(params => {
      //this.courseId = params['id'];
      const id = params['id'];
      this.courseService.getCourse(id).subscribe(course => {
        this.course = course;
      });
    })
  }
}
