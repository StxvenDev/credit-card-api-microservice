import { Controller, Delete, Param } from "@nestjs/common";
import { DeletePaymentUseCase } from "src/context/payments/application/delete-payment-use-case/delete-payment-use-case";
import { DeletePaymentHttpDto } from './delete-payment.http.dto';
import { PrimitivePayment } from "src/context/payments/domain/payment";

@Controller('payments')
export class DeletePaymentController {
  constructor(private readonly deletePaymentUseCase: DeletePaymentUseCase) {}

  @Delete(":id")
  async run(@Param() deletePaymentHttpDto: DeletePaymentHttpDto): Promise<{payment: PrimitivePayment}> {
    return this.deletePaymentUseCase.execute(deletePaymentHttpDto);
  }
  
}