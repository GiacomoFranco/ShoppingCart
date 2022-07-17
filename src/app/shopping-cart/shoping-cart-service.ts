import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';

@Injectable({
  providedIn:'root'
})

export class ShoppingCartService {

  items : CartItem[] = []

  get total(): number{
    return this.items.reduce((acc,{price}) =>( acc += price), 0)
  }

  deleteItem(itemToDelete: CartItem): void{
    this.items = this.items.filter(item => item !== itemToDelete);
  }

  get productsAmount(){
    return this.items.length
  }

  addItem(item){
    this.items = [...this.items, item ];
  }

}
