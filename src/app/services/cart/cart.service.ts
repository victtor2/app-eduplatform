import { Injectable } from '@angular/core';
import { Course } from '../../types/courses';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private courses: Course[] = [];
  private cartVisible = false;

  constructor() { }

  addCourse(course: Course){
    this.courses.push(course);
  }

  removeCourse(course: Course){
    const index = this.courses.indexOf(course);
    if(index !== -1){
      this.courses.splice(index, 1);
    }
  }

  getTotal(){
    return this.courses.reduce((total, course) => total + course.price, 0);
  }

  getCourses(){
    return this.courses;
  }

  isCartVisible(){
    return this.cartVisible;
  }

  showCart(){
    this.cartVisible = true;
  }

  hideCart() {
    this.cartVisible = false;
  }
}
