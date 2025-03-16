import { Body, Controller, Param, Patch } from "@nestjs/common";
import { UpdatePaymentUseCase } from "src/context/payments/application/update-payment-use-case/update-payment-use-case";
import { Payment, PrimitivePayment } from "src/context/payments/domain/payment";
import { UpdatePaymentHttpDto } from "./update-payment.http.dto";

@Controller('payments')
export class UpdatePaymentController {
  constructor(
    private updatePaymentUseCase : UpdatePaymentUseCase
  ){}

  @Patch(":id")
  async run(@Param() param: {id: string}, @Body() body: {amount: number}) : Promise<{payment : PrimitivePayment}>{
    const updatePaymentHttpDto = new UpdatePaymentHttpDto();
    updatePaymentHttpDto.amount = body.amount;
    updatePaymentHttpDto.id = param.id;
    return this.updatePaymentUseCase.execute({
      amount : updatePaymentHttpDto.amount,
      id : updatePaymentHttpDto.id
    })
  }
}