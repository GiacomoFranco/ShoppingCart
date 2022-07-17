import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shoping-cart-service';
import { mapProductToCartItem } from './helper/map-product-to-cart-item.helper';
import { Product } from './product';

@Component({
  selector: 'app-catalog-product-component',
  templateUrl: './catalog-product.component.html',
  styleUrls: ['./catalog-product.component.css']
})
export class CatalogProductComponentComponent implements OnInit {

  @Input() catalogItem : Product;

  constructor( private sCService : ShoppingCartService) { }

  ngOnInit(): void {
  }

  addItem(item : Product) : void{
    const cartItem = mapProductToCartItem(this.catalogItem)
    this.sCService.addItem(cartItem);
  }

}
