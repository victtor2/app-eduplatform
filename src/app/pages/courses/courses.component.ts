import { Component } from '@angular/core';
import { Course } from '../../types/courses';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  courses: Course[] = [];

  constructor(private courseService: CourseService, private router: Router){}

  ngOnInit(): void {
    // Obtenemos los cursos en tiempo real desde Firebase
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
      this.courseService.getCourses();
    });
  }

  goToCourse(id: number) {
    //console.log('Course id:', id);
    this.router.navigate(['/courses', id]);
  }
  

}
