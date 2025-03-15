import { Module } from "@nestjs/common";
import { createPaymentController } from './http-api/create-payment/create-payment.controller';
import { CreatePaymentUseCase } from '../application/create-payment-use-case/create-payment-use-case';
import { InMemoryPaymentRepository } from './repositories/in-memory.payment';

@Module({
  controllers: [createPaymentController],
  providers:[
    CreatePaymentUseCase,
    InMemoryPaymentRepository,
    {
      provide: PaymentRequest,
      useExisting: InMemoryPaymentRepository
    }
  ],
  exports: [CreatePaymentUseCase]
})
export class PaymentModule{

}