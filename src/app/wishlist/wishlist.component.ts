import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  products = [];
  total = 0;
  constructor(private wishlist: WishlistService) {}
  wishlistArr = [];
  ngOnInit(): void {
    this.wishlist.getWishList().subscribe((res) => {
      this.products = res;
      this.total = this.wishlist.getTotalWishlist();
    });
  }
  removeWishlist(item) {
    this.wishlist.removeWishList(item);
  }
}
