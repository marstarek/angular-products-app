import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient, private activeRoute: ActivatedRoute) {}
  grtProductsList() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getProductDetails() {
    return this.activeRoute.params.subscribe((param) => console.log(param));
  }
}
