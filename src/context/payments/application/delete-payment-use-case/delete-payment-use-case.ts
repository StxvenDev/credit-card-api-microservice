import { Injectable } from '@nestjs/common';
import { DeletePaymentUseCaseDto } from './delete-payment-use-case.dto';
import { PaymentRepository } from '../../domain/payment.repository';
import { PrimitivePayment } from '../../domain/payment';
import { PaymentNotFoundException } from '../../domain/exceptions/payment-not-found.exception';

@Injectable()
export class DeletePaymentUseCase {
  constructor(private paymentRepository: PaymentRepository){}
  async execute(dto: DeletePaymentUseCaseDto): Promise<{payment: PrimitivePayment}>{
    const paymentToDelete = await this.paymentRepository.getById(dto.id);
    if (!paymentToDelete) {
      throw new PaymentNotFoundException(`${dto.id}`);
    }
    await this.paymentRepository.delete(dto.id);
    return {
      payment: paymentToDelete.toValue()
    };
  }
}