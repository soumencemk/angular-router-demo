import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ProductlistComponent,
    ProductdetailsComponent
  ],
  imports: [    
    CommonModule,
    AppRoutingModule
  ]
})
export class ProductsModule { }
