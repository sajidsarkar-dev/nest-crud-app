import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {

  chargePayment(amount: number): any {
    console.log(`💰 Charging ₹${amount}...`);
    return { status: 'success', transactionId: Date.now() };
  }
}
