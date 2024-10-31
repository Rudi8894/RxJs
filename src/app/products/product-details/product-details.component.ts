import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../product';

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
    // this.route.params.subscribe(p=>{
    //   this.productId = p["id"]
    //   this.productServie.getProduct(this.productId).subscribe(p=> this.product = p);
    // });
  }
}
