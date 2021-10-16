import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss'],
})
export class ProductCardsComponent implements OnInit {
  [x: string]: any;
  constructor(
    private cartService: CartService,
    private wishListService: WishlistService
  ) {}
  @Input() product: any;
  ngOnInit(): void {}
  addToCart(item) {
    this.cartService.addToCart(item);
  }
  addWishlist(item) {
    this.wishListService.addToWishlist(item);
  }
}
