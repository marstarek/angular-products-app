import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItemsList = [];
  private cartList = new BehaviorSubject([]);
  constructor() {}
  ngOnInit(): void {}
  getCartWishList() {
    return this.cartList.asObservable();
  }
  setCartItems(items) {
    this.cartItemsList.push(...items);
    this.cartList.next(items);
  }
  addToCart(product) {
    this.cartItemsList.push(product);
    this.cartList.next(this.cartItemsList);
    this.getTotalPrice();
  }
  getTotalPrice(): any {
    let grandTotal = 0;
    this.cartItemsList.map((item) => {
      grandTotal += item.total;
    });
    return grandTotal;
  }
  removeCartItem(product) {
    this.cartItemsList.map((item, index) => {
      if (product.id === item.id) {
        this.cartItemsList.splice(index, 1);
      }
    });
    this.cartList.next(this.cartItemsList);
  }
  removeAllCart() {
    this.cartItemsList = [];
    this.cartList.next(this.cartItemsList);
  }
}
