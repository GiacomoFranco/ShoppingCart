import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/shopping-cart/shoping-cart-service';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private catalogService: CatalogService,
    private scService: ShoppingCartService
  ) { }

  ngOnInit(): void {
  }

}
