import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {

  chargePayment(amount: number): any {
    return { status: 'success', transactionId: Date.now() };
  }
}
