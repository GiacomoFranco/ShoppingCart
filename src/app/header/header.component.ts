import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shoping-cart-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() openCartEmit = new EventEmitter<void>();
  @Output() openMenuEmit = new EventEmitter<void>();

  constructor(private sCartService : ShoppingCartService) { }

  ngOnInit(): void {
  }

  get productsAmount(){
    return this.sCartService.items.length
  }

  openCart(){
    this.openCartEmit.emit();
  }

  openMenu(){
    this.openMenuEmit.emit();
  }
}
