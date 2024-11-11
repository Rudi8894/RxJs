import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../product';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit, OnChanges {
  //productId!: number;
  @Input() selectedProduct!: number;

  product!: Product;
  constructor(private productServie: ProductService,private route: ActivatedRoute){
    
  }
ngOnChanges(changes: SimpleChanges): void {
  if(changes['selectedProduct']){
    this.productServie.getProduct(this.selectedProduct).subscribe(p=> this.product = p);
  }

}

  ngOnInit(): void {
    // const error$ = of(1,2,4,66);
    // const sub = error$.pipe(
    //   map(i=> {
    //     if(i===4){
    //       throw 'custom error !'
    //     }
    //     return i*2;
    //   }),
    // ).subscribe({
    //   next: (i)=> {console.log(i)},
    //   error: (err)=> {console.log(err)},
    //   complete: ()=>{console.log('completed')}
    // });
    // const error1$ = of(1,2,4,66);
    // const sub1 = error$.pipe(
    //   map(i=> {
    //     if(i===4){
    //       throw 'custom error !'
    //     }
    //     return i*2;
    //   }),
    //   catchError(err=> of('four error'))
    // ).subscribe({
    //   next: (i)=> {console.log(i)},
    //   error: (err)=> {console.log(err)},
    //   complete: ()=>{console.log('completed')}
    // });
    // this.route.params.subscribe(p=>{
    //   this.productId = p["id"]
    //   this.productServie.getProduct(this.productId).subscribe(p=> this.product = p);
    // });
  }
}
