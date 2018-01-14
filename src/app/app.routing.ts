import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]