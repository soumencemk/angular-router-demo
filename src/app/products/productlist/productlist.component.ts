import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  products: any[] = [];
  constructor(private store: ProductsService) {}

  ngOnInit(): void {
    this.store.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
