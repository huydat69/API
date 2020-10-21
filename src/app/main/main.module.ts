import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MainComponent
      },
      
    ]
  }
]

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
