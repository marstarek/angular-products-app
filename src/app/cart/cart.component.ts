import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products = [];
  total = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartWishList().subscribe((res) => {
      this.products = res;
      this.total = this.cartService.getTotalPrice();
    });
  }
  removeItem(item) {
    this.cartService.removeCartItem(item);
  }
  emptyCart() {
    this.cartService.removeAllCart();
  }
}
