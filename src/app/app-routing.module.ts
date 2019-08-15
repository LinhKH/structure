import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', loadChildren: './main/main.module#MainModule'
  },
  {
    path: 'admin', loadChildren: './admin/admin.module#AdminModule',canActivate: [AuthGuard]
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
