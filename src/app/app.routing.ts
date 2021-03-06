import { JoyAboundComponent } from './archive/joy-abound/joy-abound.component';
import { ForeverComponent } from './archive/forever/forever.component';

import { AGodICanTrustComponent } from './archive/a-god-i-can-trust/a-god-i-can-trust.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AddItemComponent } from './inventory/add-item/add-item.component';
import { AnEndComponent } from './archive/an-end/an-end.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './archive/index/index.component';
import { JeremiahComponent } from './archive/jeremiah/jeremiah.component';
import { ConfessionComponent } from './archive/confession/confession.component';
import { ArchiveComponent } from './archive/archive.component';
import { Article1Component } from './articles/article1/article1.component';
import { Article0Component } from './articles/article0/article0.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { GuiltComponent } from './archive/guilt/guilt.component';
import { SmolderingStubsComponent } from './archive/smoldering-stubs/smoldering-stubs.component';
import { CorrectedComponent } from './archive/corrected/corrected.component';
import { FilledEvenMoreComponent } from './archive/filled-even-more/filled-even-more.component';


export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'create',
        component: CreateBlogComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'articles',
        component: ArticlesComponent,
        children: [
            { path: 'article0', component: Article0Component },
            { path: 'article1', component: Article1Component }
        ]
    },
    {
        path: 'archive',
        component: ArchiveComponent,
        children: [
            { path: 'confession', component: ConfessionComponent },
            { path: 'jeremiah', component: JeremiahComponent },
            { path: 'index', component: IndexComponent },
            { path: 'guilt', component: GuiltComponent },
            { path: 'smoldering', component: SmolderingStubsComponent},
            { path: 'an end', component: AnEndComponent},
            { path: 'a god i can trust' , component: AGodICanTrustComponent},
            { path: 'corrected', component: CorrectedComponent},
            { path: 'filled even more', component: FilledEvenMoreComponent},
            { path: 'forever', component: ForeverComponent},
            { path: 'joy abound', component: JoyAboundComponent}
        ]
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'inventory',
        component: InventoryComponent,
        children: [
            { path: 'additem', component: AddItemComponent}
        ]

    }


];
