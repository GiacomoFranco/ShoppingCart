import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  changueCartState(){
    this.cartState = !this.cartState
  }

  changueMenuState(){
    this.menuState = !this.menuState
  }

  cartState : boolean = false;
  menuState : boolean = true;
}
