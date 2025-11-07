import { Test, TestingModule } from '@nestjs/testing';
import { OrdersV2Controller } from './orders-v2.controller';

describe('OrdersV2Controller', () => {
  let controller: OrdersV2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersV2Controller],
    }).compile();

    controller = module.get<OrdersV2Controller>(OrdersV2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
