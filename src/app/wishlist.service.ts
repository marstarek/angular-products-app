import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor() {}
  wishListArr = [];
  private wishList = new BehaviorSubject([]);
  ngOnInit(): void {}
  getWishList() {
    return this.wishList.asObservable();
  }
  setCartItems(items) {
    this.wishListArr.push(...items);
    this.wishList.next(items);
  }
  addToWishlist(product) {
    this.wishListArr.push(product);
    this.wishList.next(this.wishListArr);
  }
  getTotalWishlist(): any {
    return this.wishListArr.length;
  }
  removeWishList(product) {
    this.wishListArr.map((item, index) => {
      if (product.id === item.id) {
        this.wishListArr.splice(index, 1);
      }
    });
    this.wishList.next(this.wishListArr);
  }
  // removeAllCart() {
  //   this.wishListArr = [];
  //   this.wishList.next(this.wishListArr);
  // }
}
