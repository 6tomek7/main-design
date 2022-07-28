import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
  ngOnInit(): void {
  }
  array = [
    {
    id: 1,
    name: "Piotr"
    },
    {
    id: 2,
    name: "Krzysiek"
    },
    {
    id: 3,
    name: "Sławek"
    }
  ]
  
  products = [...products];
 
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


