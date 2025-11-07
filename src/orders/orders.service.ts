import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  private ordersList = [
    { id: 1, item: 'Item A' },
    { id: 2, item: 'Item B' }
  ];

  constructor() { }

  getAllOrders(): any[] {
    return this.ordersList;
  }

  findOrderById(id: number): any {
    return this.ordersList.find(order => order.id === id);
  }

  createOrder(orderData: any): any {
    const newOrder = {
      id: this.ordersList.length + 1,
      ...orderData
    };
    this.ordersList.push(newOrder);
    return newOrder;
  }
}
