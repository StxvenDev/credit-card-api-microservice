import { Controller, Get, Param } from "@nestjs/common";
import { GetPaymentHttpDto } from "./get-payment.http.dto";
import { PrimitivePayment } from "src/context/payments/domain/payment";
import { GetPaymentUseCase } from "src/context/payments/application/get-payment-use-case/get-payment-use-case";

@Controller('payments')
export class GetPaymentController {
  constructor(private readonly getPaymentUseCase : GetPaymentUseCase){}

  @Get(":id")
  async run(@Param() getPaymentHttpDto : GetPaymentHttpDto ) : Promise<{payment : PrimitivePayment}>{
    return await this.getPaymentUseCase.execute({
      id: getPaymentHttpDto.id
    });
  }
}