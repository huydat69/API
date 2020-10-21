import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChitietComponent } from './chitiet/chitiet.component';
import { ListComponent } from './list/list.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'chitiet/:id',
        component: ChitietComponent
      }
    ]
  }
]

@NgModule({
  declarations: [ChitietComponent, ListComponent,],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ChitietComponent, 
    ListComponent
  ]
})
export class ProductModule { }
