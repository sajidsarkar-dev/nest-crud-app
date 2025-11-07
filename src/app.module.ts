import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { PaymentModule } from './payment/payment.module';
import { OrdersModule } from './orders/orders.module';
import { OrdersV2Controller } from './orders-v2/orders-v2.controller';

@Module({
  imports: [UsersModule, ProductsModule, PaymentModule, OrdersModule],
  controllers: [AppController, OrdersV2Controller],
  providers: [AppService],
})
export class AppModule {}
