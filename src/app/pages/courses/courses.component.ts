import { Component } from '@angular/core';
import { Course } from '../../types/courses';
import { Router } from '@angular/router';
import { CourseService } from '../../services/courses/course.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
    selector: 'app-courses',
    imports: [],
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.css'
})
export class CoursesComponent {

  courses: Course[] = [];

  constructor(private courseService: CourseService, private router: Router, private cartService: CartService){}

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

  addToCart(event: Event, course: Course){
    event.stopPropagation();
    this.cartService.addCourse(course);
  }
  

}
