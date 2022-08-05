import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'src/app/shopping-cart/shoping-cart-service';
import { CatalogService } from '../catalog.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product! : Product | null;

  constructor(
    private catalogService: CatalogService,
    private scService: ShoppingCartService,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {

    const productId = this.route.snapshot.paramMap.get('id');
    this.product = this.catalogService.getProduct(Number(productId));
    //la sintaxis no la entiendo, en *getProduct(Number(productId))*
  }

}
