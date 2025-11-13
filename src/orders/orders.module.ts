import { forwardRef, Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { UsersModule } from '../users/users.module';
import { ProductsModule } from '../products/products.module';
import { PaymentModule } from '../payment/payment.module';
import { UserOrdersController } from './user-orders/user-orders.controller';
import { UserOrdersService } from './user-orders/user-orders.service';

const CURRENCY = { code: 'INR', symbol: '₹' };
@Module({
  imports: [
    UsersModule,
    ProductsModule,
    PaymentModule
  ],
  controllers: [
    OrdersController,
    UserOrdersController
  ],
  providers: [
    {provide: 'CURRENCY', useValue: CURRENCY},
    OrdersService, 
    UserOrdersService    
  ],
  exports: [OrdersService]
})
export class OrdersModule {}
