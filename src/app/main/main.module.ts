import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main.component';


import { MainRoutingModule } from './main-routing.module';
import { CoursesModule } from './courses/courses.module';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [BannerComponent,FooterComponent,HeaderComponent,MainComponent, HomeComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    CoursesModule,
    StaticpagesModule
  ]
})
export class MainModule { }
