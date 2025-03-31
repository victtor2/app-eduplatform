import { Component } from '@angular/core';
import { Course } from '../../types/courses';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../services/courses/course.service';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
    selector: 'app-videos',
    imports: [RouterLink, SafeUrlPipe ],
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
        // Transformar la URL antes de asignarla
      if (course.videoUrl.includes('watch?v=')) {
        course.videoUrl = course.videoUrl.replace('watch?v=', 'embed/');
      }
        this.course = course;
      });
    })
  }
}
