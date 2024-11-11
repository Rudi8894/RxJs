import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, shareReplay, switchMap, tap, throwError } from 'rxjs';
import { Product } from './product';
import { ProductData } from './product-data';
import { HttpErrorService } from '../utilities/http-error.service';
import { error } from 'console';
import { ReviewService } from '../reviews/review.service';
import { Review } from '../reviews/review';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private  productUrl = 'api/products'
  constructor(private http: HttpClient, private errorService: HttpErrorService, private reviewService: ReviewService){

  }

  readonly products$ =  this.http.get<Product[]>(this.productUrl).
  pipe(
   tap((p)=> console.log(JSON.stringify(p))),
   shareReplay(1),
   catchError(err=> {
    // return of(ProductData.products)
    return this.hanldeError(err);
   })
  );

  // getProducts(): Observable<Product[]>{
  //    return this.http.get<Product[]>(this.productUrl).
  //    pipe(
  //     tap(()=> console.log('in http.get pipeline')),
  //     catchError(err=> {
  //      // return of(ProductData.products)
  //      return this.hanldeError(err);
  //     })
  //    );
  // }

  getProductWithReview(product: Product): Observable<Product>{
    if(product.hasReviews){
      console.log(product, 'hasReview');
      return this.http.get<Review[]>(this.reviewService.getReviewUrl(product.id))
      .pipe(
        map(reviews => ({...product, reviews} as Product))
      )
    } else{
      return of (product)
    }
  }

  getProduct(id: number): Observable<Product>{
    const productUrl = this.productUrl + '/' + id;
    return this.http.get<Product>(productUrl).pipe(
      tap(()=> console.log('in http get pipeliine')),
      switchMap(prod=> this.getProductWithReview(prod)),
      catchError(err=> this.hanldeError(err))
    );
  }
  private hanldeError(err: HttpErrorResponse): Observable<never>{
    const formattedMessage = this.errorService.formatError(err);
    return throwError(()=> formattedMessage);
  }

}
