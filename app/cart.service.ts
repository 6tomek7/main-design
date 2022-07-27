import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

/* . . . */
@Injectable({ providedIn: 'root' })
export class CartService {
  items: Product[] = [];
  constructor(
    private http: HttpClient
  ) {}
  getShippingPrices() {
    return this.http.get<{type: string, price: number, sss: number}[]>('/assets/shipping.json');
  }

  getProducts() {
    return this.http.get<{id: number, name: string, price: number, description: string}[]>('/assets/products.json');
  }
  
 
/* . . . */

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
/* . . . */
}