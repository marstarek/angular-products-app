import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}
  title: string = 'Products';
  counter;
  products;
  ngOnInit(): void {
    this.productsService.grtProductsList().subscribe((res) => {
      this.products = res;
      this.products.forEach((product) => {
        Object.assign(product, { quantity: 1, total: product.price });
      });
    }),
      (error) => console.log(error);
    this.cartService
      .getCartWishList()
      .subscribe((count) => (this.counter = count));
  }
  addToCart(item) {
    this.cartService.addToCart(item);
  }
}
