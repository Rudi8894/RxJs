import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { catchError, EMPTY, tap } from 'rxjs';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule, ProductDetailsComponent, AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent{
  pageTitle =  'Products';
  errorMessage ='';
  
  constructor(private productService: ProductService){

  }

  selectedProductId: number = 0;
  readonly products$ = this.productService.products$
  .pipe(
    tap(()=> console.log('In Compon. Pipeline')),
    catchError(err=> {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  onSelected(productId: number){
    this.selectedProductId = productId;
  }
  
  
}
