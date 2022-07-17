import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})


export class CatalogServiceService {

  constructor() { }

  catalogItems : Product[] = [
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
      name: 'Monitor',
      price: 200,
    },

  ]
}
