import { Injectable } from "@angular/core";
import { CartItem } from "./cart-item";

@Injectable({
  providedIn:'root'
})

export class ShoppingCartService{

  itemsOnCart : CartItem[] = [
    {
      imageUrl: 'headphones.jpg',
      name: 'Auriculares',
      price: 50,
    },
    {
      imageUrl: 'keyboard.jpg',
      name: 'Teclado',
      price: 150,
    },
    {
      imageUrl: 'monitor.jpg',
      name: 'Auriculares',
      price: 200,
    },

  ]

  deleteItemOnCart(itemToDelete : CartItem){
    this.itemsOnCart = this.itemsOnCart.filter((item) => item !== itemToDelete);
  }

  get total(){
    return this.itemsOnCart.reduce((item, { price }) => item += price, 0)
  }

}
