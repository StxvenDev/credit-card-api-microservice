import { Body, Controller, Post } from '@nestjs/common';
import { CreatePaymentUseCase } from '../../../application/create-payment-use-case/create-payment-use-case';
import { CreatePaymentHttpDto } from './create-payment.http-dto';
import { PrimitivePayment } from 'src/context/payments/domain/payment';
@Controller('payments')
export class CreatePaymentController {
  constructor(private  createPaymentUseCse : CreatePaymentUseCase ){}

  @Post()
  async run(@Body() createPaymentHttpDto: CreatePaymentHttpDto): Promise<{payment: PrimitivePayment}>{
    return await this.createPaymentUseCse.execute({
      amount: createPaymentHttpDto.amount,
      customerId: createPaymentHttpDto.customerId,
    })
  }
}