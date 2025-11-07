import { forwardRef, Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { UsersModule } from '../users/users.module';
import { ProductsModule } from '../products/products.module';
import { PaymentModule } from '../payment/payment.module';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    ProductsModule,
    PaymentModule
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService]
})
export class OrdersModule {}
