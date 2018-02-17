import { HomeComponent } from './home/home.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export const routes: Routes = [
    {
        path: '',
        component:LandingPageComponent
    },
    {
        path: "create",
        component:CreateBlogComponent
    }
]