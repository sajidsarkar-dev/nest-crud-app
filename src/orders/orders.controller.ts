import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {

  constructor(
    private ordersService: OrdersService
  ) { }

  @Get()
  getOrders(): any[] {
    return this.ordersService.getAllOrders();
  }

  @Get(':id')
  getOrderById(@Param('id') id: number | string): any {
    return this.ordersService.findOrderById(Number(id));
  }

  @Post()
  createOrder(@Body() order: any): any {
    return this.ordersService.createOrder(order);
  }
}
