import { Injectable } from '@nestjs/common';
import { PaymentService } from '../payment/payment.service';
import { ProductsService } from '../products/products.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class OrdersService {
  private ordersList = [
    { id: 1, item: 'Item A' , amount: 100, paymentStatus: undefined},
    { id: 2, item: 'Item B', amount: 200, paymentStatus: undefined }
  ];

  constructor(
    private readonly usersService: UsersService,
    private readonly productsService: ProductsService,
    private readonly paymentService: PaymentService,
  ) { }

  getAllOrders(): any[] {
    return this.ordersList;
  }

  findOrderById(id: number): any {
    return this.ordersList.find(order => order.id === id);
  }

  createOrder(orderData: any): any {
    const payment = this.paymentService.chargePayment(orderData.amount);
    const newOrder = {
      id: this.ordersList.length + 1,
      ...orderData,
      paymentStatus: payment.status
    };
    this.ordersList.push(newOrder);
    return newOrder;
  }
}
