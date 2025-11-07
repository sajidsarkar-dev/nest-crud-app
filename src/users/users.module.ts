import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserOrdersController } from './orders/user-orders/user-orders.controller';
import { UserOrdersService } from './orders/user-orders/user-orders.service';

@Module({
  controllers: [UsersController, UserOrdersController],
  providers: [UsersService, UserOrdersService]
})
export class UsersModule {}
