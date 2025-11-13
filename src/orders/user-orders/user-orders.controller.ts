import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserOrdersService } from './user-orders.service';

@Controller('users/:userId/orders')
export class UserOrdersController {
  constructor(
    private userOrdersService: UserOrdersService
  ) { }

  @Get()
  getUserOrders(
    @Param('userId') userId: number | string
  ): any[] {
    return this.userOrdersService.getOrdersForUser(Number(userId));
  }

  @Post()
  createUserOrder(
    @Param('userId') userId: number | string,
    @Body() newOrder:any
  ): any {
    return this.userOrdersService.createOrderForUser(Number(userId),newOrder);
  }
}
