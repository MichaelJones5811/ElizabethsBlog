import { HomeComponent } from './home/home.component';
import { AdminServiceService } from './admin-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { keyframes } from '@angular/core/src/animation/dsl';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SideBarComponent,
    LandingPageComponent,
    CreateBlogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AdminServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
