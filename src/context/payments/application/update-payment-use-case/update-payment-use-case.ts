import { PrimitivePayment } from "../../domain/payment";
import { PaymentRepository } from "../../domain/payment.repository";
import { Injectable } from "../../shared/dependency-injection/injectable";
import { UpdatePaymentUseCaseDto } from "./update-payment-use-case.dto";

@Injectable()
export class UpdatePaymentUseCase {
  constructor(
    private paymentRepository : PaymentRepository
  ){}

  async execute(updatePaymentUseCaseDto : UpdatePaymentUseCaseDto) : Promise<{payment : PrimitivePayment}>{
    const payment = await this.paymentRepository.update(updatePaymentUseCaseDto.amount, updatePaymentUseCaseDto.id)
    return {
      payment : payment.toValue()
    }
  }
}