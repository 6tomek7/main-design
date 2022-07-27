import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-products-with-json',
  templateUrl: './products-with-json.component.html',
  styleUrls: ['./products-with-json.component.css']
})
export class ProductsWithJsonComponent implements OnInit {

  constructor(private cartService: CartService) { }
  products!: Observable<{ id: number, name: string, price: number, description: string }[]>;

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
  }

}
