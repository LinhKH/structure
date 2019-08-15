import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { 
    path: '', loadChildren: './courses/courses.module#CoursesModule'
  },
  {
    path: 'admin', loadChildren: './admin/admin.module#AdminModule',
  },
  {
    path: 'auth', loadChildren: './auth/auth.module#AuthModule'
  },
  { 
    path: '**', component: PageNotFoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
