import { Injectable } from '@angular/core';
import { Course } from '../types/courses';
import { Firestore, collectionData, collection, addDoc, doc, deleteDoc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private coursesCollection;

  constructor(private firestore: Firestore) { 
    this.coursesCollection = collection(this.firestore, 'courses');
  }

  getCourses(): Observable<Course[]> {
    return collectionData(this.coursesCollection, { idField: 'id' }) as Observable<Course[]>;
  }

  getCourse(id: number): Observable<Course> {
    const courseRef = doc(this.firestore, "courses", id.toString());
    return docData(courseRef) as Observable<Course>;
  }

  addCourse(course: Course) {
    return addDoc(this.coursesCollection, course);
  }

  /*updateCourse(course: Course){
    const courseRef = doc(this.firestore, "sourses", sourse.id.toString());
    return setDoc(courseRef, course, {merge: true});
  }*/

  deleteCourse(id: string) {
    return deleteDoc(doc(this.firestore, `courses/${id}`));
  }
}
