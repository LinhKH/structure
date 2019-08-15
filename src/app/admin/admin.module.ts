import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { AdminComponent } from './admin.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';


@NgModule({
  declarations: [DashboardComponent, PostComponent, AdminComponent, PostDetailComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
