import { Controller, Get } from '@nestjs/common';

@Controller({ path: 'orders', version: '2' })
export class OrdersV2Controller {
  constructor() { }

  @Get()
  getOrdersV2(): any {
    return {"message": "This is Orders V2 endpoint"};
  }
}
