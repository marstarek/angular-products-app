import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  totalItems = 0;
  constructor(private cartService: CartService) {}
  title: string = 'Products';
  ngOnInit(): void {
    this.cartService
      .getCartWishList()
      .subscribe((res) => (this.totalItems = res.length));
  }
}
