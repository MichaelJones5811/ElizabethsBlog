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
import { ContactComponent } from './contact/contact.component';
import { ArticlesComponent } from './articles/articles.component';
import { Article0Component } from './articles/article0/article0.component';
import { Article1Component } from './articles/article1/article1.component';
import { Article2Component } from './articles/article2/article2.component';
import { ArchiveComponent } from './archive/archive.component';
import { ConfessionComponent } from './archive/confession/confession.component';
import { JeremiahComponent } from './archive/jeremiah/jeremiah.component';
import { IndexComponent } from './archive/index/index.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SideBarComponent,
    LandingPageComponent,
    CreateBlogComponent,
    HomeComponent,
    ContactComponent,
    ArticlesComponent,
    Article0Component,
    Article1Component,
    Article2Component,
    ArchiveComponent,
    ConfessionComponent,
    JeremiahComponent,
    IndexComponent,
    AboutComponent
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
