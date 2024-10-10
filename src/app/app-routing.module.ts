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
import { authGuard } from './guards/auth-guard.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'first', component: FirstComponent, canActivate: [authGuard] },
  { path: 'second', component: SecondComponent, canActivate: [authGuard] },
  {
    path: 'products',
    component: ProductlistComponent,
    canActivate: [authGuard],
  },
  {
    path: 'products/:id',
    component: ProductdetailsComponent,
    canActivate: [authGuard],
  },
  { path: 'posts', component: PostsComponent, canActivate: [authGuard] },
  {
    path: 'posts/:id',
    component: PostdetailsComponent,
    canActivate: [authGuard],
  },
  { path: 'contact', component: ContactComponent, canActivate: [authGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
