import { Component,Injector, OnInit } from '@angular/core';
import{ BaseComponent} from './../../lib/base-component'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) { 
    super(injector);
  }
  
  items:any;
  total:any;
  iteamcart:any;
  totalpirice:any;
  totalproduce:any;
  

  ngOnInit(): void {
    this._cart.items.subscribe((res) => {
      this.items = res;
      this.total = 0;
      for(let x of this.items){ 
        x.money = x.quantity * x.item_price;
        this.total += x.quantity * x.item_price;
      } 
    });
  } 
  destroyCart(){
    this._cart.clearCart();
    alert("Xoá hết rồi nè!!!");
  }

  deleteItem(id){
    this._cart.deleteItem(id);
    alert("Cũng xoá được rồi nè");
  }
}
