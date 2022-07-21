export interface Order{
  id: number,
  status: OrderStatus,
}

export enum OrderStatus{
  InPreparation = 'En preparación',
  Prepared = 'Preparado',
  Delivered = 'Entregado',
}
