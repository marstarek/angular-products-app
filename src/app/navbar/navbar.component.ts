import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  totalItems = 0;
  totalWishlist = 0;
  constructor(
    private cartService: CartService,
    private wishlistItems: WishlistService
  ) {}
  ngOnInit(): void {
    this.cartService
      .getCartWishList()
      .subscribe((res) => (this.totalItems = res.length));
    this.wishlistItems
      .getWishList()
      .subscribe((res) => (this.totalWishlist = res.length));
  }
}
