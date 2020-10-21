import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../lib/api.service';
import { first, map, switchMap } from 'rxjs/operators';
import { CartService } from "../../lib/cart.service";

@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit {

  constructor(private apiService: ApiService,
    private _cart: CartService,
    private activatedRoute: ActivatedRoute) { }

  product: any;
  ngOnInit(): void {
    this.activatedRoute.paramMap
    .pipe(
      first(),
      map((params)=>params.get('id')),
      switchMap((id)=>this.apiService.GetbyId(id))
    )
    .subscribe((product)=>{
      this.product=product;
     
      
    })
  }

  add_cart(product)
  {
    this._cart.addToCart(product);
    alert('Thêm thành công');
  }
}
