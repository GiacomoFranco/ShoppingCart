import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems : CartItem[] = [
    {
      imageUrl: "headphones.jpg",
      name: "Auriculares",
      price: 50,
    },
    {
      imageUrl: "keyboard.jpg",
      name: "Teclado",
      price: 14.5,
    },
    {
      imageUrl: "monitor.jpg",
      name: "Monitor",
      price: 199.99,
    },


  ];

  deleteItem(itemToDelete: CartItem):void{
    this.cartItems = this.cartItems.filter(item => item !== itemToDelete)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
