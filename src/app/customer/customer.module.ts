import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { Router, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'cart/:id',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'checkout/:id',
    component: CheckoutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login/:id',
    component: LoginComponent,
  },
]

@NgModule({
  declarations: [CartComponent, CheckoutComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CartComponent, 
  ]
})
export class CustomerModule { }
