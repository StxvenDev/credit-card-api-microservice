import { PrimitivePayment, Payment } from '../../domain/payment';
import { PaymentRepository } from "../../domain/payment.repository";
import { Injectable } from "../../shared/dependency-injection/injectable";
import { GetPaymentUseCaseDto } from './get-payment-use-case.dto';
import { PaymentNotFoundException } from '../../domain/exceptions/payment-not-found.exception';

@Injectable()
export class GetPaymentUseCase {
  constructor(private readonly paymentRepository : PaymentRepository){}

  async execute(getPaymentDto: GetPaymentUseCaseDto): Promise<{payment : PrimitivePayment}> {
    const payment = await this.paymentRepository.getById(getPaymentDto.id);
    if(!payment){
      throw new PaymentNotFoundException(`Payment with id ${getPaymentDto.id} not found`)
    }
    return {
      payment : payment.toValue()
    }
  }
}