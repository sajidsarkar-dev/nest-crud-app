import { Injectable } from '@nestjs/common';
import { OrdersService } from '../orders.service';
import { UsersService } from '../../users/users.service';

@Injectable()
export class UserOrdersService {
  private userOrders = [
    { userId: 1, orders: [{ id: 1, item: 'Item A', amount: 100, paymentStatus: undefined }] },
    { userId: 2, orders: [{ id: 2, item: 'Item B', amount: 200, paymentStatus: undefined }] }
  ];

  constructor(
    private ordersService: OrdersService,
    private userService: UsersService
  ) { } 

  getOrdersForUser(userId: number): any[] {
    const userOrder = this.userOrders.find(uo => uo.userId === userId);
    return userOrder ? userOrder.orders : [];
  }

  createOrderForUser(userId: number, orderData: any): any {
    const newOrder = this.ordersService.createOrder(orderData);
    let userOrder = this.userOrders.find(uo => uo.userId === userId);
    if (!userOrder) {
      userOrder = { userId, orders: [] };
      this.userOrders.push(userOrder);
    }
    userOrder.orders.push(newOrder);
    return newOrder;
  }
}
