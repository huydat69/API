import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/lib/api.service'
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/model1/product';
import { CartService } from "../../app/lib/cart.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  products:product[];
  constructor(private apiService: ApiService,
     private _cart: CartService,
     private activatedRoute: ActivatedRoute)  { }
  

  ngOnInit(): void {
    this.apiService.getAll().subscribe(
    (response) => {
      this.products = response;
      console.log(this.products);
    },
  );
  }
  add_cart(item)
  {
    this._cart.addToCart(item);
    alert('Thêm thành công');
  }
}
