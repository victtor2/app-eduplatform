import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { VideosComponent } from './pages/videos/videos.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [

    { path:'home', component: HomeComponent},
    { path: 'courses', component: CoursesComponent},
    { path: 'courses/:id', component: VideosComponent},
    { path: 'login', component: LoginComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: NotFoundComponent}

];
