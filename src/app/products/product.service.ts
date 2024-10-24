import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private  productUrl = 'api/products'
  constructor(private http: HttpClient){

  }

  getProducts(): Observable<Product[]>{
     return this.http.get<Product[]>(this.productUrl).
     pipe(
      tap(()=> console.log('in http.get pipeline'))
     );
  }
  getProduct(id: number): Observable<Product>{
    const productUrl = this.productUrl + '/' + id;
    return this.http.get<Product>(productUrl).pipe(
      tap(()=> console.log('in http get pipeliine'))
    );
  }
}
