import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MainModule } from './main/main.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';


import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    MainModule,
    AdminModule,
    AuthModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
