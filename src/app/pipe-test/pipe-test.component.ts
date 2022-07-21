import { Component, OnInit } from '@angular/core';
import { Order, OrderStatus } from './order.interface';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  os = OrderStatus;

  orders: Order[] = [
    {id: 1, status: OrderStatus.InPreparation},
    {id: 2, status: OrderStatus.InPreparation},
    {id: 3, status: OrderStatus.Prepared},
    {id: 4, status: OrderStatus.Delivered},
    {id: 5, status: OrderStatus.InPreparation},

  ];

  numbers: number[] = [1,2,3,4,5]

  addOrder(): void{
    const newOrder : Order = {
      id: this.orders.length + 1,
      status: this.os.InPreparation,
    };
    this.orders = [...this.orders, newOrder]
  }

}

