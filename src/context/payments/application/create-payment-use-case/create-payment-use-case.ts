import { CreatePaymentUseCaseDto } from './create-payment-use-case.dto';
import { PaymentRepository } from '../../domain/payment.repository';
import { Payment, PrimitivePayment } from '../../domain/payment';
export class CreatePaymentUseCase {
  constructor(private readonly paymentRepository : PaymentRepository){}
  async execute(dto : CreatePaymentUseCaseDto): Promise<{payment: PrimitivePayment}>{
    const payment = Payment.create(dto);
    await this.paymentRepository.create(payment);
    return {
      payment: payment.toValue()
    };
  }
}