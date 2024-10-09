import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProductlistComponent } from './products/productlist/productlist.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';
import { PostsComponent } from './posts/posts/posts.component';
import { PostdetailsComponent } from './posts/postdetails/postdetails.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'products', component: ProductlistComponent },
  { path: 'products/:id', component: ProductdetailsComponent},
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostdetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
