import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductsModule } from './products/products.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    NotFoundComponent, 
    ContactComponent,   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ProductsModule,
    HttpClientModule,
    PostsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
