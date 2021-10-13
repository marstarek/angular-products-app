import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss'],
})
export class ProductCardsComponent implements OnInit {
  constructor() {}
  @Input() product: any;
  ngOnInit(): void {}
}
