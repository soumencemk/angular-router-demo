import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [PostdetailsComponent, PostsComponent],
  imports: [HttpClientModule, AppRoutingModule, CommonModule],
})
export class PostsModule {}
