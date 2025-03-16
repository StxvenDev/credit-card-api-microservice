import { Module } from "@nestjs/common";
import { CreatePaymentController } from './http-api/create-payment/create-payment.controller';
import { CreatePaymentUseCase } from '../application/create-payment-use-case/create-payment-use-case';
import { InMemoryPaymentRepository } from './repositories/in-memory.payment';
import { PaymentRepository } from "../domain/payment.repository";
import { GetPaymentController } from "./http-api/get-payment/get-payment.controller";
import { GetPaymentUseCase } from "../application/get-payment-use-case/get-payment-use-case";
import { UpdatePaymentUseCase } from "../application/update-payment-use-case/update-payment-use-case";
import { UpdatePaymentController } from "./http-api/update-payment/update-payment.controller";
@Module({
  controllers: [CreatePaymentController, GetPaymentController, UpdatePaymentController],
  providers:[
    CreatePaymentUseCase,
    GetPaymentUseCase,
    UpdatePaymentUseCase,
    InMemoryPaymentRepository,
    {
      provide: PaymentRepository,
      useExisting: InMemoryPaymentRepository
    }
  ],
  exports: [CreatePaymentUseCase, GetPaymentUseCase, UpdatePaymentUseCase]
})
export class PaymentModule{

}