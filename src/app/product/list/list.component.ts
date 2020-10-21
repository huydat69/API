import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/lib/api.service'
import { product } from 'src/app/model1/product';
import { CartService } from "../../lib/cart.service";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products:product[];
  constructor(private apiService: ApiService, private _cart: CartService ) { }

  ngOnInit(): void {
 
    this.apiService.getAll().subscribe(
      (response) => {
        this.products = response;
        
      },
    
    );
  }
  add_cart(item)
  {
    this._cart.addToCart(item);
    alert('Thêm thành công');
  }
}
