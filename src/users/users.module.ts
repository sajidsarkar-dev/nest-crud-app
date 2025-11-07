import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserOrdersController } from './orders/user-orders/user-orders.controller';
import { UserOrdersService } from './orders/user-orders/user-orders.service';
import { OrdersModule } from './../orders/orders.module';

@Module({
  imports: [
    forwardRef(() => OrdersModule)
  ],
  controllers: [
    UsersController, 
    UserOrdersController
  ],
  providers: [
    UsersService, 
    UserOrdersService
  ],
  exports: [UsersService]
})
export class UsersModule {}
