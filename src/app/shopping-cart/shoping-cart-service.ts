import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';

@Injectable({
  providedIn:'root'
})

export class ShoppingCartService {

  items : CartItem[] = [
    {
      imageUrl:"headphones.jpg",
      name:"Auriculares",
      price:50,
    },
    {
      imageUrl:"keyboard.jpg",
      name:"Teclado",
      price:100,
    },
    {
      imageUrl:"monitor.jpg",
      name:"Monitor",
      price:150,
    }
  ]

  get total(): number{
    return this.items.reduce((acc,{price}) =>( acc += price), 0)
  }

  deleteItem(itemToDelete: CartItem): void{
    this.items = this.items.filter(item => item !== itemToDelete);
  }
}
