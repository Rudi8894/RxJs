import { Routes } from '@angular/router';
import { ObservablesComponent } from './observables/observables.component';
import { OperatorsComponent } from './operators/operators.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

export const routes: Routes = [
    {
        path:'obs',
        component: ObservablesComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'products',
        component: ProductListComponent
    },
    {
        path:'products/:id',
        component: ProductDetailsComponent
    },
    {
        path:'cart',
        component: CartListComponent
    }
];
