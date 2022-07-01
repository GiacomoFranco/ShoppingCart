import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})

export class ShoppingCartItemComponent implements OnInit {

  @Input() cartItem: CartItem;

  @Output() cartItemDelete = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClicked(){
    this.cartItemDelete.emit();
  }
}
