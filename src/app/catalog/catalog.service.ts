import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})


export class CatalogService {

  constructor() { }

  readonly catalogItems : Product[] = [
    {
      id: 1,
      imageUrl: 'headphones.jpg',
      name: 'Auriculares',
      price: 50,
    },
    {
      id: 2,
      imageUrl: 'keyboard.jpg',
      name: 'Teclado',
      price: 150,
    },
    {
      id: 3,
      imageUrl: 'monitor.jpg',
      name: 'Monitor',
      price: 200,
    },


  ];

  getProduct(requestId: number): Product | null {
    return this.catalogItems.find((product) => product.id === requestId) || null;
  }
}
