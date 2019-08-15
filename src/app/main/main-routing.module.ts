

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { PageComponent } from './staticpages/page/page.component';
import { ContactUsComponent } from './staticpages/contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home', component: HomeComponent,
      },
      {
        path: 'course', component: CourseListComponent,
      },
      {
        path: 'course/:id', component: CourseDetailComponent,
      },
      { path: 'page/:slug', component: PageComponent },
      { path: 'contact', component: ContactUsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
