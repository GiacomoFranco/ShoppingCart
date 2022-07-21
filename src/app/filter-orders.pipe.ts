import { Pipe, PipeTransform } from '@angular/core';
import { Order, OrderStatus } from './pipe-test/order.interface';

@Pipe({
  name: 'filterOrders',
  // pure: false,
})
export class FilterOrdersPipe implements PipeTransform {

  transform(orders: Order[], filterBy: OrderStatus): Order[] {
    return orders.filter(order => order.status === filterBy);
  }

}
