import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderItemDto } from './dto/order-item.dto';

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
  createOrder(@Body() order: OrderItemDto): any {
    return this.ordersService.createOrder(order);
  }
}
