import { from } from 'rxjs';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';

import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path : 'home',
        loadChildren: () => import ('./main/main.module').then((p) => p.MainModule),
    },
    {
        path: 'product',
        loadChildren: () => import ('./product/product.module').then((p) => p.ProductModule),
    },
    {
        path: 'customer',
        loadChildren: () => import ('./customer/customer.module').then((p) => p.CustomerModule),
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule{}