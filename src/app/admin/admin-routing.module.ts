import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';


const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard', component: DashboardComponent,
      },
      {
        path: 'post', component: PostComponent,
      },
      {
        path: 'post/add', component: PostDetailComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }