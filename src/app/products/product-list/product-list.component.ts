import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Subscription, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from "../product-details/product-details.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule, ProductDetailsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle =  'Products';
  errorMessage ='';
  sub!: Subscription;
  products: Product[]= [];
  
  constructor(private productService: ProductService){

  }

  selectedProductId: number = 0;

  ngOnInit(): void {
    this.sub = this.productService.getProducts()
      .pipe(
        tap(()=> console.log('In Compon. Pipeline'))
      ).subscribe(products=> this.products = products);
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onSelected(productId: number){
    this.selectedProductId = productId;
  }
  
  
}
