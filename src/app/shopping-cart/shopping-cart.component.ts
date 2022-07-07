import { Component, OnInit } from '@angular/core';
import { cartItem } from './cart-item';
import { ShoppingCartService } from './shoping-cart-service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {


  get cartItems(): cartItem[] {
    return this.shoppingCartService.items;
  }

  get total(): number{
   return this.shoppingCartService.total;
 }

 deleteItem(itemToDelete: cartItem): void{
  this.shoppingCartService.deleteItem(itemToDelete);
 }


  constructor(private shoppingCartService : ShoppingCartService) {}

  ngOnInit(): void {

  }

}
