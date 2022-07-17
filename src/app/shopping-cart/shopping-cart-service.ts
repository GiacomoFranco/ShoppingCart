import { Injectable } from "@angular/core";
import { CartItem } from "./cart-item";

@Injectable({
  providedIn:'root'
})

export class ShoppingCartService{

  itemsOnCart : CartItem[];

  deleteItemOnCart(itemToDelete : CartItem){
    this.itemsOnCart = this.itemsOnCart.filter((item) => item !== itemToDelete);
  }

  get total(){
    return this.itemsOnCart.reduce((item, { price }) => item += price, 0)
  }

}
