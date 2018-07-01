
import { CorrectedComponent } from './archive/corrected/corrected.component';
import { AGodICanTrustComponent } from './archive/a-god-i-can-trust/a-god-i-can-trust.component';
import { AddItemService } from './add-item.service';
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
import { GuiltComponent } from './archive/guilt/guilt.component';
import { SmolderingStubsComponent } from './archive/smoldering-stubs/smoldering-stubs.component';
import { AnEndComponent } from './archive/an-end/an-end.component';
import { AddItemComponent } from './inventory/add-item/add-item.component';
import { InventoryComponent } from './inventory/inventory.component';

import { StoreadminComponent } from './storeadmin/storeadmin.component';
import { FilledEvenMoreComponent } from './archive/filled-even-more/filled-even-more.component';
import { ForeverComponent } from './archive/forever/forever.component';
import { JoyAboundComponent } from './archive/joy-abound/joy-abound.component';
import * as $ from 'jquery';
import { FooterComponent } from './footer/footer.component';



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
    AboutComponent,
    GuiltComponent,
    SmolderingStubsComponent,
    AnEndComponent,
    AddItemComponent,
    InventoryComponent,
    StoreadminComponent,
    AGodICanTrustComponent,
    CorrectedComponent,
    FilledEvenMoreComponent,
    ForeverComponent,
    JoyAboundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AdminServiceService,
    AddItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
